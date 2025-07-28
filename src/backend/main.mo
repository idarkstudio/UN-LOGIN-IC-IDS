import AdminSystem "auth-single-user/management";
import Map "mo:base/OrderedMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import Array "mo:base/Array";

persistent actor {
    // Initialize the admin system state
    let adminState = AdminSystem.initState();

    // Initialize admin (first caller becomes admin)
    public shared ({ caller }) func initializeAuth() : async () {
        AdminSystem.initializeAuth(adminState, caller);
    };

    // Check if current user is admin
    public query ({ caller }) func isCurrentUserAdmin() : async Bool {
        AdminSystem.isCurrentUserAdmin(adminState, caller);
    };

    // ** Application-specific user profile management **
    public type UserProfile = {
        name : Text;
        // Other user's metadata if needed
    };

    transient let principalMap = Map.Make<Principal>(Principal.compare);
    var userProfiles = principalMap.empty<UserProfile>();

    public query ({ caller }) func getUserProfile() : async ?UserProfile {
        principalMap.get(userProfiles, caller);
    };

    public shared ({ caller }) func saveUserProfile(profile : UserProfile) : async () {
        userProfiles := principalMap.put(userProfiles, caller, profile);
    };

    // ** Start of application specific logic, TODO: adapt to your needs **
    // This is an example to how to protect data creation, update and deletion

    type Data = {
        id : Nat;
        content : Text;
        metadata : Text;
    };

    transient let dataMap = Map.Make<Nat>(Nat.compare);
    var data : Map.Map<Nat, Data> = dataMap.empty<Data>();
    var nextId : Nat = 0;

    public shared ({ caller }) func createData(content : Text, metadata : Text) : async () {
        if (not (AdminSystem.isCurrentUserAdmin(adminState, caller))) {
            Debug.trap("Unauthorized: Only admin can create data");
        };
        let newData = {
            id = nextId;
            content;
            metadata;
        };
        data := dataMap.put(data, nextId, newData);
        nextId += 1;
    };

    public shared ({ caller }) func updateData(id : Nat, content : Text, metadata : Text) : async () {
        if (not (AdminSystem.isCurrentUserAdmin(adminState, caller))) {
            Debug.trap("Unauthorized: Only admin can update data");
        };
        let updatedData = {
            id;
            content;
            metadata;
        };
        data := dataMap.put(data, id, updatedData);
    };

    public shared ({ caller }) func deleteData(id : Nat) : async () {
        if (not (AdminSystem.isCurrentUserAdmin(adminState, caller))) {
            Debug.trap("Unauthorized: Only admin can delete data");
        };
        data := dataMap.delete(data, id);
    };

    public query ({ caller }) func getData(id : Nat) : async ?Data {
        if (not (AdminSystem.isCurrentUserAdmin(adminState, caller))) {
            Debug.trap("Unauthorized: Only admin can view data");
        };
        dataMap.get(data, id);
    };

    public query ({ caller }) func getAllData() : async [Data] {
        if (not (AdminSystem.isCurrentUserAdmin(adminState, caller))) {
            Debug.trap("Unauthorized: Only admin can view data");
        };
        var result : [Data] = [];
        for ((_, value) in dataMap.entries(data)) {
            result := Array.append(result, [value]);
        };
        result;
    };
};

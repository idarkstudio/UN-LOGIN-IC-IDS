import { AlertCircle, CheckCircle, ExternalLink, Mail, MessageCircle, Send } from "lucide-react";
import React, { useContext, useState } from "react";

import { LanguageContext } from "../App";

const Contact = () => {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const submitContactForm = useSubmitContactForm();
  const submitContactForm = () => {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitContactForm.mutateAsync(formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/idarkstudio",
      icon: "🐦",
      handle: "@idarkstudio",
    },
    {
      name: "Discord",
      url: "https://discord.gg/idarkstudio",
      icon: "💬",
      handle: "Join our Discord",
    },
    {
      name: "Telegram",
      url: "https://t.me/idarkstudio",
      icon: "📱",
      handle: "@idarkstudio",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/idarkstudio",
      icon: "💼",
      handle: "Inside Dark Studio",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-900">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Send us a message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={submitContactForm.isPending}
                  className="w-full px-4 py-3 bg-black border border-red-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 hover:border-red-600 hover:shadow-red-glow disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={submitContactForm.isPending}
                  className="w-full px-4 py-3 bg-black border border-red-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 hover:border-red-600 hover:shadow-red-glow disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  disabled={submitContactForm.isPending}
                  className="w-full px-4 py-3 bg-black border border-red-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 hover:border-red-600 hover:shadow-red-glow resize-none disabled:opacity-50"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={submitContactForm.isPending}
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow border border-red-500 hover:border-red-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
              >
                {submitContactForm.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t("contact.send")}
                  </>
                )}
              </button>

              {submitContactForm.isSuccess && (
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <p className="text-green-400">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitContactForm.isError && (
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                    <p className="text-red-400">
                      Failed to send message. Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-900">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">Direct Contact</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:contact@insidedarkstudio.com"
                    className="text-red-500 hover:text-red-400 transition-all duration-300 flex items-center hover:shadow-red-glow"
                  >
                    contact@insidedarkstudio.com
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-1">Business Hours</p>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM (GMT-5)</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-1">Response Time</p>
                  <p className="text-gray-300">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-900">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-black/50 rounded-lg border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow"
                  >
                    <span className="text-2xl mr-3">{social.icon}</span>
                    <div>
                      <div className="text-white font-medium group-hover:text-red-300 transition-colors">
                        {social.name}
                      </div>
                      <div className="text-gray-400 text-sm">{social.handle}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-red-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Community */}
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700">
              <h3 className="text-2xl font-bold text-red-500 mb-4">Join Our Community</h3>
              <p className="text-gray-300 mb-6">
                Be part of the revolution in Web3 gaming. Connect with developers, players, and
                enthusiasts from around Latin America and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://discord.gg/idarkstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 hover:shadow-red-glow border border-red-500 hover:border-red-400"
                >
                  💬 Join Discord
                </a>
                <a
                  href="https://t.me/idarkstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg transition-all duration-300 hover:shadow-red-glow border border-red-600 hover:border-red-500"
                >
                  📱 Join Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

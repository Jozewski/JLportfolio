"use client"

import type React from "react"
import emailjs from "emailjs-com"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import { sendContactEmail } from "@/app/actions/contact"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitMessage("")

  try {
    const result = await emailjs.sendForm(
      "service_mhunvlr",     // Replace with your EmailJS service ID
      "template_44kwkml",    // Replace with your EmailJS template ID
      "#contact-form",       // This matches your form's ID
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,      // Replace with your EmailJS public key
     

    )

    if (result.status === 200) {
      setSubmitMessage("Message sent successfully! I'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } else {
      setSubmitMessage("Something went wrong. Please try again.")
    }
  } catch (error) {
    console.error("EmailJS error:", error)
    setSubmitMessage("Sorry, there was an error sending your message.")
  } finally {
    setIsSubmitting(false)
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "joanneliszewski@gmail.com",
      href: "mailto:joanneliszewski@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mesa, Arizona",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Jozewski",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/joanne-liszewski-437036125",
      color: "hover:text-blue-600",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="font-heading text-2xl font-bold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-border"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-border"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-input border-border"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-input border-border min-h-32"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitMessage && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      submitMessage.includes("successfully")
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information and Social Links */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-background border-border h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-bold text-foreground">Contact Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">{info.label}</div>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-background border-border h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-bold text-foreground">Follow Me</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-full">
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a specific idea in
                mind or just want to explore possibilities, I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Joaane Liszewski Full-Stack Developer Portfolio. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

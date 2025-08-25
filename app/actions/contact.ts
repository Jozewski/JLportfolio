"use server"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

 
  // In production, integrate with an email service like Resend, SendGrid, etc.
  console.log("Contact form submission:", {
    to: "joanneliszewski@gmail.com",
    from: email,
    name,
    subject,
    message,
  })

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true, message: "Message sent successfully!" }
}

import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: "Welcome to My Portfolio",
    home: "Home",
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    skills: "Skills",
    name: "Name",
    your_email: "Email",
    your_message: "Message",
    send_message: "Send",
    contact_description: "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",
    personal_quote: "I am a passionate software developer with a focus on creating innovative solutions. Explore my work and let's connect!",
    let_connect: "Let's Connect",
    contact_quote: "Whether you have an idea, a collaboration in mind, or just want to say hello — feel free to get in touch. I’d love to hear from you!"
  },
  khm: {
    welcome: "សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់ខ្ញុំ",
    home: "ទំព័រដើម",
    about: "អំពីខ្ញុំ",
    projects: "គម្រោងរបស់ខ្ញុំ",
    contact: "ទំនាក់ទំនង",
    skills: "ជំនាញ",
    name: "ឈ្មោះ",
    your_email: "អ៊ីមែល",
    your_message: "សារ",
    send_message: "ផ្ញើ",
    contact_description: "មានបញ្ហាបច្ចេកទេសមែនទេ? ចង់ផ្ញើមតិយោបល់អំពីលក្ខណៈពិសេសប៉ះពាល់មែនទេ? ត្រូវការព័ត៌មានអំពីផែនការអាជីវកម្មរបស់យើងមែនទេ? សូមអនុញ្ញាតឱ្យយើងដឹង។",
    personal_quote: "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធីដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតដំណោះស្រាយថ្មីៗ។ សូមស្វែងរកការងាររបស់ខ្ញុំ ហើយឱ្យយើងទំនាក់ទំនងគ្នា!",
    let_connect: "ទំនាក់ទំនងមកខ្ញុំ",
    contact_quote: "មិនថាអ្នកមានគំនិត ឬការសហការណ៍ក្នុងចិត្ត ឬគ្រាន់តែចង់និយាយសួរទេ — សូមទំនាក់ទំនងមកខ្ញុំ។ ខ្ញុំពិតជាចង់បានការស្តាប់ពីអ្នក!"
  }
}

export const i18n = createI18n({
  locale: 'en',
  messages,
})

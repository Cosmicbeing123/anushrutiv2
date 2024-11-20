'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, GraduationCap, Mail, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const marketingSkills = [
    'Strategic SEO Mastery',
    'Marketing Automation Expertise',
    'Data Analysis Proficiency',
    'Brand Planning and Development',
    'Innovative Marketing Strategy',
    'Social Media Management',
    'Lead Generation Techniques',
    'Market Research Acumen',
    'Project Management',
    'Content Strategy Planning',
    'Competitive Research',
    'Omnichannel Marketing'
  ]

  const technicalSkills = [
    'Google Ads & Analytics',
    'HubSpot CRM',
    'Salesforce Marketing Cloud',
    'Microsoft Power BI',
    'Tableau',
    'Figma',
    'Adobe Creative Suite',
    'Microsoft Dynamics 365',
    'Apple Search Ads',
    'Bing Ads',
    'Shopify',
    'WordPress'
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            AS
          </Link>
          <ul className="flex space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.toLowerCase() ? 'text-purple-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hello! I&apos;m
              <br />
              Anushruti Singh
            </span>
          </h1>
          <p className="text-xl text-purple-700 mb-4">
            A Marketing Manager turning insights into impactful strategies.
          </p>
          <p className="text-lg text-purple-600 mb-12">
            Passionate about blending creativity with data to drive growth and innovation.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full group"
          >
            <a href="#contact" className="flex items-center gap-2">
              Let&apos;s Connect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anushruti-mountain.jpg-K5f4VeMIJnBX5TqBhtQptWRrLIP9qS.jpeg"
                alt="Anushruti Singh in the mountains"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700">
                A dynamic Marketing Manager with a flair for crafting compelling narratives and a keen eye for analytics. Over the past five years, I&apos;ve been at the forefront of developing marketing strategies that not only capture attention but also deliver measurable results.
              </p>
              <p className="text-lg text-gray-700">
                My journey has taken me from the bustling halls of international business schools to leading campaigns for top-tier firms. I&apos;m driven by curiosity, fueled by creativity, and committed to making a meaningful impact in the marketing landscape.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Professional Skills
          </motion.h2>
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!showTechnicalSkills ? 'text-purple-600' : 'text-gray-500'}`}>
              Marketing
            </span>
            <Switch
              checked={showTechnicalSkills}
              onCheckedChange={setShowTechnicalSkills}
              className="data-[state=checked]:bg-purple-600"
            />
            <span className={`text-sm font-medium ${showTechnicalSkills ? 'text-purple-600' : 'text-gray-500'}`}>
              Technical
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={showTechnicalSkills ? 'technical' : 'marketing'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {(showTechnicalSkills ? technicalSkills : marketingSkills).map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-pink-50/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-800">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="experience" className="min-h-screen py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Professional Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-purple-200" />
            {[
              {
                title: "Marketing Manager",
                company: "CMC Canada",
                achievements: [
                  "Managed a $3.5M marketing budget in 2024, exceeding lead acquisition targets by 120% through strategic digital campaigns and optimizing acquisition frameworks.",
                  "Developed data-driven dashboards integrating CRM and ad platforms like Google Ads, Bing, ASA, and LinkedIn, utilizing A/B testing and personalized strategies to enhance customer acquisition and retention.",
                  "Collaborated with UX/UI teams to enhance website, resulting in 25&percnt; improvement in user experience",
                  "Designed tailored marketing strategies for new products aligned with target audiences, collaborating with overseas marketing teams (Australia, UK, Singapore) to execute impactful campaigns across digital and social media platforms.",
                  "Reinforced CMC Markets’ brand presence in the Canadian market by aligning campaigns with sales, product, and global marketing teams, improving engagement and retention while optimizing budget allocation for maximum ROI.;"
                ]
              },
              {
                title: "Digital Marketing Specialist",
                company: "Marsh",
                achievements: [
                  "Led the modernization of a 50-year-old aviation insurance platform by developing a dynamic new website, reducing data submission time from 50 to 10 minutes and increasing conversions by 20% through A/B testing and optimized spend.",
                  "Designed impactful global marketing campaigns to elevate brand awareness and demand generation, collaborating with sales and stakeholders to align strategies and enhance user experiences using Salesforce Marketing Cloud and Adobe Experience Manager (AEM).",
                  "Delivered measurable results through integrated digital, social, and event campaigns, nurturing client relationships and driving business growth.;"
                ]
              },
              {
                title: "Digital Marketing Coordinator",
                company: "Raymond James",
                achievements: [
                  "Boosted engagement by 30% through automated email marketing campaigns for B2B and B2C insurance, leveraging automation to enhance customer journeys and significantly improving client retention with targeted remarketing strategies.",
                  "Increased web traffic by 30% with engaging campaigns, showcasing expertise in marketing technologies like automation tools, WordPress, and content management systems, and coordinated product enhancements, digital asset management, and newsletter development.",
                  "Created data-driven content aligned with market trends, supported by research and analytics, delivering cohesive social media campaigns to enhance brand messaging, consistently improving audience engagement, visibility, and retention.;"
                ]
              },
              {
                title: "Digital Marketing Consultant",
                company: "City of Mississauga",
                achievements: [
                  "Supported local businesses through the "Digital Main Street" initiative by providing consulting services for digital transformation, improving their online presence and engagement.",
                  "Designed customer journeys and brand strategies for emerging businesses, focusing on building cohesive brand experiences that drive both acquisition and retention.",
                  "Developed social media strategies that increased follower growth, applying data-driven insights from tools like Google Analytics, Facebook Business Manager, and Google Ads to optimize engagement and conversion metrics."
                  "Extended the reach of business support programs and government grants through strategic marketing, live Q&As, webinars, and consulting sessions."
                  "Created content for Instagram, Twitter, Facebook, and YouTube using Figma and Hootsuite, crafting brand campaigns and paid media strategies aligned with strategic customer acquisition goals.;"
                ]
              }
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-16 ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                } md:w-[calc(50%-2rem)] p-6 bg-white rounded-xl shadow-lg`}
              >
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 z-10" />
                <h3 className="text-xl font-bold text-purple-600 mb-2">{role.title}</h3>
                <p className="text-purple-400 mb-4">{role.company}</p>
                <ul className="space-y-2">
                  {role.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="min-h-screen py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Educational Background
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                year: "2020",
                degree: "Master's in International Business Management & Marketing Management",
                school: "Algonquin College, Ottawa",
                description: "Specialized in digital marketing strategies and international business development."
              },
              {
                year: "2018",
                degree: "Bachelor of Commerce - specialise in Banking, Corporate, Finance, and Securities Law",
                school: "Ahmedabad University",
                description: "Focus on Finance, marketing fundamentals and business administration."
              }
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-pink-50/50 p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                  <div className="text-2xl font-bold text-purple-600">{edu.year}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{edu.degree}</h3>
                <p className="text-purple-600 mb-4">{edu.school}</p>
                <p className="text-gray-700">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Let&apos;s Connect
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.a
              href="https://www.linkedin.com/in/anushrutisingh18/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Linkedin className="w-8 h-8 text-purple-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">LinkedIn</h3>
              <p className="text-gray-600">Connect with me</p>
            </motion.a>
            <motion.a
              href="mailto:anushrutisingh18@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Mail className="w-8 h-8 text-purple-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600">Send me a message</p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}

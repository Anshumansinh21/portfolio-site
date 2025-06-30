import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Download, Video, Maximize, X } from "lucide-react"
import Modal from 'react-modal'
import { Document, Page, pdfjs } from 'react-pdf'
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

// Make sure to set this in your main app file
// Modal.setAppElement('#root')

const allProjects = [
  {
    title: "Pearlinfo Website US",
    type: "site",
    image: "../img/pearlinfo-us.png",
    tech: ["wordpress"],
    github: "",
    live: "pearlinfo.us",
    description: "Corporate website built with WordPress to showcase services and expertise of Pearlinfo US."
  },
  {
    title: "Homestead Website",
    type: "site",
    image: "../img/Homestead.png",
    tech: ["wordpress"],
    github: "",
    live: "https://www.homesteadcorbett.com/",
    description: "Modern and responsive landing page for a resort, with engaging design and animations."
  },
  {
    title: "Somnath Temple",
    type: "site",
    image: "/img/somnath.png",
    tech: ["react", "CRA", "bootstrap"],
    github: "",
    live: "https://somnath-react.netlify.app/",
    description: "React-based informational website for Somnath Temple, showcasing history and features."
  },
  {
    title: "PearlInfo IN",
    type: "site",
    image: "../img/pearlinfoin.png",
    tech: ["WordPress", "SEO"],
    github: "",
    live: "https://pearlinfo.in",
    description: "SEO-optimized business website for PearlInfo IN, focused on user experience and visibility."
  },
  {
    title: "Water Park Management Software",
    type: "site",
    image: "../img/waterpark.png",
    tech: ["react", "tailwind", "redux"],
    github: "",
    live: "https://aquasoft-tkt.netlify.app/",
    description: "Web application for managing ticketing and operations at water parks, built with React and Redux."
  },
  {
    title: "Software Website",
    type: "site",
    image: "../img/spro.png",
    tech: ["wordpress", "SEO", "elementor"],
    github: "",
    live: "spro.cloud",
    description: "Professional website for software solutions company, featuring SEO and Elementor customization."
  },
  {
    title: "Aeroaviation Website",
    type: "site",
    image: "../img/cms.png",
    tech: ["wordpress", "SEO", "elementor"],
    github: "",
    live: "https://cmsaeroaviation.com/",
    description: "Corporate aviation website designed with Elementor, optimized for search engine performance."
  },
  {
    title: "Marketing Video",
    type: "video",
    video: "../img/SPRO_14feb compressed.mp4",
    tech: ["Video Editing", "After Effects"],
    github: "",
    live: "",
    description: "Promotional video created for SPRO showcasing marketing highlights and product value."
  },
  {
    title: "Demonstration Video",
    type: "video",
    video: "../img/SPRO - Demonstration Compressed.mp4",
    tech: ["Video Editing", "After Effects"],
    github: "",
    live: "",
    description: "Product demonstration video outlining features and benefits for potential clients."
  },
  {
    title: "Presentation Video",
    type: "video",
    video: "../img/shlokvid.mp4",
    tech: ["Video Editing", "After Effects"],
    github: "",
    live: "",
    description: "Animated video presentation designed for pitching business ideas and projects."
  },
  {
    title: "Promo Video",
    type: "video",
    video: "../img/SPRO_ESIGN_PROMO.mp4",
    tech: ["Video Editing", "After Effects"],
    github: "",
    live: "",
    description: "Eye-catching promo video for SPRO’s e-signature feature, highlighting key advantages."
  },
  {
    title: "Demo Video",
    type: "video",
    video: "../img/TechSalon_port.mp4",
    tech: ["Video Editing", "After Effects"],
    github: "",
    live: "",
    description: "Technology product walkthrough demonstrating interface and usability."
  },
  {
    title: "Social Media Video",
    type: "video",
    video: "../img/Unlock_peak_efficiency_V2.mp4",
    tech: ["Video Editing", "After Effects"],
    github: "",
    live: "",
    description: "Social media content video designed to promote brand efficiency and performance."
  },
  {
    title: "Presentation Deck",
    type: "file",
    image: "../img/aquapdf.png",
    file: "../img/Aquasoft new.pdf",
    tech: ["Pitch", "PDF"],
    github: "",
    live: "",
    description: "Professional PDF pitch deck created for Aquasoft, aimed at investors and stakeholders."
  },
  {
    title: "Figma UI Design",
    type: "image",
    image: "../img/Desktop - 2.png",
    tech: ["Figma", "UI/UX"],
    github: "",
    live: "",
    description: "User interface design created in Figma for a desktop dashboard layout."
  },
  {
    title: "Social Media Post",
    type: "image",
    image: "../img/Purple and Pink Playful Illustrative Holi Festival Greeting Instagram Post.jpg",
    tech: ["Graphic Design", "Illustration"],
    github: "",
    live: "",
    description: "Colorful Instagram post designed for Holi festival greetings and engagement."
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  }),
}

const categories = ["all", "site", "image", "video", "file"]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [modalType, setModalType] = useState('image')
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === activeCategory)

  const openModal = (content, type) => {
    setModalContent(content)
    setModalType(type)
    setModalIsOpen(true)
    setPageNumber(1) // Reset page number when opening new PDF
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Title and Description */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl pb-4 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            My Creative Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my work across different mediums and technologies.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition-all text-sm font-medium capitalize ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2"
            >
              {/* Media */}
              <div className="h-60 w-full relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                {project.type === "video" ? (
                  <>
                    <video
                      src={project.video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <button 
                        onClick={() => openModal(project.video, 'video')}
                        className="ml-auto bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition"
                        aria-label="Expand video"
                      >
                        <Maximize className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                ) : project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <button 
                        onClick={() => openModal(project.image, 'image')}
                        className="ml-auto bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition"
                        aria-label="Expand image"
                      >
                        <Maximize className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                    <div className="text-center p-6">
                      <Download className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                      <p className="text-gray-500 dark:text-gray-400">{project.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition hover:underline"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit
                    </a>
                  )}
                  {project.file && (
                    <button
                      onClick={() => openModal(project.file, 'pdf')}
                      className="flex items-center text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition hover:underline"
                    >
                      <Maximize className="w-4 h-4 mr-2" />
                      View
                    </button>
                  )}
                  {project.file && (
                    <a
                      href={project.file}
                      download
                      className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition hover:underline"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">No projects found in this category</h3>
            <button 
              onClick={() => setActiveCategory('all')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal for expanded media */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Media Viewer"
        closeTimeoutMS={300}
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>

        <div className="h-full w-full flex items-center justify-center p-4">
          {modalType === 'image' && (
            <img 
              src={modalContent} 
              alt="Full screen" 
              className="max-h-[90vh] max-w-full object-contain rounded-lg"
            />
          )}
          
          {modalType === 'video' && (
            <div className="w-full max-w-4xl">
              <video 
                src={modalContent}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg"
              />
            </div>
          )}

          {modalType === 'pdf' && (
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
              <div className="flex justify-center mb-4 gap-4">
                <button 
                  onClick={() => changePage(-1)} 
                  disabled={pageNumber <= 1}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-4 py-2">
                  Page {pageNumber} of {numPages || '--'}
                </span>
                <button 
                  onClick={() => changePage(1)} 
                  disabled={pageNumber >= (numPages || 0)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-auto max-h-[70vh]">
                <Document
                  file={modalContent}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<div className="p-8 text-center">Loading PDF...</div>}
                >
                  <Page 
                    pageNumber={pageNumber} 
                    width={800}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href={modalContent} 
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          )}
        </div>
      </Modal>

      <style jsx global>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          transform: translate(-50%, -50%);
          background: transparent;
          padding: 0;
          border: none;
          width: 90%;
          height: 90%;
          max-width: 1200px;
          outline: none;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          opacity: 0;
          transition: opacity 300ms ease-in-out;
        }
        
        .ReactModal__Overlay--after-open {
          opacity: 1;
        }
        
        .ReactModal__Overlay--before-close {
          opacity: 0;
        }
        
        .react-pdf__Page__canvas {
          margin: 0 auto;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  )
}

export default Projects
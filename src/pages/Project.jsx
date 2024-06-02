import ContactTile from '../components/contactTile'
import { socialMedia } from '../constants'

const Project = () => {
  return (
    <div className='min-h-screen px-8 py-16 bg-primary'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialMedia.map((platform, index) => (
            <ContactTile key={index} platform={platform} />
        ))}
        </div>
    </div>
  )
}

export default Project
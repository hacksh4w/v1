function ContactTile({ platform }) {
  return (
    <a href={platform.url} target="_blank" rel="noopener noreferrer" className='h-14 w-80 bg-slate-800 rounded-lg shadow-lg flex items-center p-4 hover:bg-slate-700 transition-colors duration-200'>
      <img src={platform.icon} alt={platform.name} className='h-8 w-8 mr-4' />
      <span className='text-white'>{platform.name}</span>
    </a>
  )
}

export default ContactTile

import Image from 'next/image'
import img from '../public/1.jpg'

function Pets() {
  return (
    <div>
      <Image src={img} placeholder="blur" alt="pet" width="380" height="420" />
      {['1', '2', '3', '4', '5'].map((path) => (
        <div key={path}>
          <Image
            src={`/${path}.jpg`}
            blurDataURL
            alt="pet"
            width="280"
            height="420"
          />
        </div>
      ))}
    </div>
  )
}

export default Pets

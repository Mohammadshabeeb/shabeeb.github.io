import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {

  const galleryLength = 15;
  const images = []


  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }



  return (
    <>

    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo explicabo maiores officia quia Assumenda.
    </Header>

<section className="gallery">
  <div className="container container_gallery">

    {
      images.map((image,index) =>
      
      {
        return <article key={index}>
         <img src={image} alt={`gallery image ${index + 1}`}/>
        </article>
      }
      )
    }
  </div>
</section>


    </>
  )
}

export default Gallery

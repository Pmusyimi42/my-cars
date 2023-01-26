import './App.css'
import './Services.css'



const Services=() => {

    return (
        <section id='services'>
            <><h2>Our Services</h2><div className='Container services_container'>
                <article className='services'>
                    <div className='services_head>' />
                    <h3>Insurance</h3>
                    <div/>
                    <ul className='services_list'>
                        <li>
                            <p>Third Party car Insurance</p>
                        </li>
                        <li>
                            <p>Comprehesive covers</p>
                        </li>
                    </ul>
                    <div className='services_head>' />
                    <h3>Maintenance</h3>
                    <div/>
                    <ul className='services_list'>
                        <li>
                            <p>Painting</p>
                        </li>
                        <li>
                            <p>Full car services</p>
                        </li>    
                    </ul>
                </article>
            </div></>
        </section>
        
    )           
}

export default Services;

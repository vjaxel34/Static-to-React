import classes from './Product.module.css'

function Products() {
  return (
    <section class={classes.wrapper}>
        <detail class={classes.showcase}>
            <h1>We Believe in Creativity</h1>
            <p class="text">AV Art is a multimedia service company that is committed to help users find useful resources to extend their creativity. As a team we understand that time can be an issue for users, so we have created a page where you are able to find available services that can help extend a project or whatever the case may be.</p>
        </detail>
        <div class="image">
            <img src="/images/woman.png" alt="woman" height="150px"></img>
            <p>Price: $5-12</p>
            <h1>Book Cover</h1>
            <p>Book covers are very important when grabbing the readers attention. Price varies depending on style and size.</p>
        </div>
        <div class="image2">
            <img src="/images/man-5625314_640.png" alt="man" height="150px"></img>
            <p>Price: $100-300</p>
            <h1>Photography</h1>
            <p>Need a professional to take pictures for you? AV-Media has a team that can do that for you. Contact us for price range.</p>
        </div>
        <div class="image3">
            <img src="/images/walkingman.png" alt="walking" height="150px"></img>
            <p>Price: $20</p>
            <h1>Shoe Design</h1>
            <p>We can design shoes that have white space around it. Contact us for design preference.</p>
        </div>
        <div class="image4">
            <img src="/images/brownhairgirl.png" alt="brwon" height="150px"></img>
            <p>Price: $10-50</p>
            <h1>Canvas Drawing</h1>
            <p>We can ship you canvas or pick up at our store. Price varies on canvas size.</p>
        </div>
        <div class="image5">
            <img src="/images/newspaper-1389980_1280.png" alt="news" width="150px"></img>
            <p>Price: $15</p>
            <h1>Newspaper</h1>
            <p>The Newspaper team at AV-Media can create newspapers for you! We create professional looking newspapers.</p>
        </div>
        <div class="image6">
            <img src="/images/resting.png" alt="rest" height="150px"></img>
            <p>Price: $20</p>
            <h1>Self-portriat</h1>
            <p>Sel-portriats are great for decorating your room. Our art team create realistic and cartoon style self-portiats.</p>
        </div>
        <div class="image7">
            <img src="/images/moon.png" alt="moon" height="150px"></img>
            <p>Price: $40</p>
            <h1>Bag Desinging</h1>
            <p>We glam up bags when the customer asks for it. Get bags professionally designed and badazaled.</p>
        </div>
        <div class="image8">
            <img src="/images/event.png" alt="ee" height="150px"></img>
            <p>Price: $100</p>
            <h1>Event Design</h1>
            <p>Need help with special events? Hire one of our most reliable designers to help you decorate.</p>
        </div>
        <div class="image9">
            <img src="/images/manager.png" alt="iihb" height="150px"></img>
            <p>Price: $50</p>
            <h1>Magazine</h1>
            <p>Hire one of the best magazine creators in our team. Our magazine team design help you with magazine ideas.</p>
        </div>
        <div class="image10">
            <img src="/images/surf.png" alt="surf" height="150px"></img>
            <p>Price: $150</p>
            <h1>Video Editing</h1>
            <p>We understand that some users need time for themselves. As a team, we are able to edit your videos to save your time.</p>
        </div>
        <div class="image11">
            <img src="/images/men-4451373_640.png" alt="men" height="150px"></img>
            <p>Price: $30</p>
            <h1>Canvas Blacklight Art</h1>
            <p>Have LED lights? Blacklight canvas drawings are the best to show off those cool LED ligts.</p>
        </div>
        <div class="image12">
            <img src="/images/blueshirt.png" alt="red" height="150px"></img>
            <p>Price: $10</p>
            <h1>Design on Sides of a book</h1>
            <p>Creativity comes first in our book. Our team can help you design the side of a book.</p>
        </div>
    </section>
    

  )
}

export default Products
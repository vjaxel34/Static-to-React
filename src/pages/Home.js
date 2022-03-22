import classes from './Home.module.css'

const Home = () =>{
  return (
    <body>
            <content class= {classes.wrapper}>
            <section class={classes.showcase}>
                <h1>We Believe in Creativity</h1>
                <p class={classes.text}>AV Art is a multimedia service company that is committed to help users find useful resources to extend their creativity. As a team we understand that time can be an issue for users, so we have created a page where you are able to find available services that can help extend a project or whatever the case may be.</p>
            </section>
            <detail class={classes.about}>
                <p>"Our greatest strength is embracing change in order to better ourselves" - Axel VJ</p>
            </detail>
            <div class={classes.icon2}>
                <div class="font2"><i class="fas fa-portrait"></i></div>
                <h2>Support Us</h2>
                <p>In order to continue providing the best services for our customers, we need your support.</p>
            </div>
            <div class={classes.icon3}>
                <div class="font3"><i class="fas fa-edit"></i></div>
                <h2>Services</h2>
                <p>We provide helpful tips and continue to get in touch with our customers as soon as possible. We also provide a variety of services.</p>
            </div>
            <div class={classes.icon4}>
                <div class="font4"><i class="fas fa-clipboard-list"></i></div>
                <h2>Our Goal</h2>
                <p>With the help of our team and the resources we provide, we would like to further our commitment to help those in need.Our goal is to spread positivity to those around us.</p>
            </div>
            <div class={classes.icon5}>
                <div class="font5"><i class="fas fa-comment"></i></div>
                <h2>Contact Us</h2>
                <p>We would like to hear from you, whether it is to help you or learn from you. The contact page has additional information about our team that you could use. If you have any additional questions, suggestions, or concerns that you may have please contact us.</p>
            </div>
            <section class={classes.products}>
                <h1>Product Overview</h1>
                <table>
                    <tr>
                        <td>Book Cover</td>
                    </tr>
                    <tr>
                        <td>Self-portriat</td>
                    </tr>
                    <tr>
                        <td>Hard Copy Magazine</td>
                    </tr>
                    <tr>
                        <td>Newspaper</td>
                    </tr>
                    <tr>
                        <td>Canvas Drawing</td>
                    </tr>
                    <tr>
                        <td>Danvas Drawing (Blacklight)</td>
                    </tr>
                    <tr>
                        <td>Mural</td>
                    </tr>
                    <tr>
                        <td>Clay Sculpture</td>
                    </tr>
                    <tr>
                        <td>Custom Shoe Design</td>
                    </tr>
                    <tr>
                        <td>T-shirt Designs</td>
                    </tr>
                    <tr>
                        <td>Video Editing</td>
                    </tr>
                    <tr>
                        <td>Photography</td>
                    </tr>
                    <tr>
                        <td>
                            <h1>More Info</h1>
                            <p>Finished products will be done around 3-5 business days.</p>
                        </td>
                    </tr>
                </table>
            </section>
            <detail class={classes.man}>
                <h1>We Value Art</h1>
                <img src="/images/walkingman.png" alt="MAN" height="200px"></img>
            </detail>
    </content>
</body>
  )
}

export default Home
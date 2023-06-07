

import React from 'react';
import './Home.css';
import Logo from '../images/home-bg-min.jpg';
import Logo1 from '../images/img1-min.png';
import Logo2 from '../images/img2-min.png';
import Logo3 from '../images/img3-min.png';
import Logo4 from '../images/img4-min.png';
import Logo5 from '../images/img5-min.png';
import Logo6 from '../images/img6-min.png';
import Logo7 from '../images/img7-min.png';
import Logo8 from '../images/img8-min.png';
import Logo9 from '../images/img9-min.png';
import Logo10 from '../images/about-img-min.png';
import Logo11 from '../images/m1-min.jpg';
import Logo12 from '../images/m2-min.jpg';
import Logo13 from '../images/m3-min.jpg';
import Logo14 from '../images/m4-min.jpg';
import Logo15 from '../images/m5-min.jpg';
import Logo16 from '../images/m6-min.jpg';
import Logo17 from '../images/p1-min.png';
import Logo18 from '../images/p2-min.png';
import Logo19 from '../images/p3-min.png';
import Logo20 from '../images/p4-min.png';
import Logo21 from '../images/scroll-img-min.png';


const Home = () => {
  return (
    <>
      <section className="home" id="home">

      <div className="content">
          <h3>amazing marvel movies</h3>
          <h1>welcome marvel fans</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus suscipit eum obcaecati dolorem unde. Iusto possimus sequi officiis harum architecto!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, earum!
          </p>
          <a href="/characters" className="btn">get started</a>
      </div>

      <div className="image">
          <img src={Logo} alt=""/>
      </div>

      </section>




      <section className="gallery" id="gallery">

      <h1 className="heading"> <span>superheroes</span> gallery </h1>

      <div className="box-container">

      <div className="box">
          <img src={Logo1} alt=""/>
          <div className="info">
              <h3>captain america</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      <div className="box">
          <img src={Logo2} alt=""/>
          <div className="info">
              <h3>thor</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      <div className="box">
          <img src={Logo3} alt=""/>
          <div className="info">
              <h3>ant-man</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      <div className="box">
          <img src={Logo4} alt=""/>
          <div className="info">
              <h3>drax</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      <div className="box">
          <img src={Logo5} alt=""/>
          <div className="info">
              <h3>captain marvel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      <div className="box">
          <img src={Logo6} alt=""/>
          <div className="info">
              <h3>spider-man</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      <div className="box">
          <img src={Logo7} alt=""/>
          <div className="info">
              <h3>doctor strange</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      <div className="box">
          <img src={Logo8} alt=""/>
          <div className="info">
              <h3>black panther</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      <div className="box">
          <img src={Logo9} alt=""/>
          <div className="info">
              <h3>iron-man</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum.</p>
              <a href="#" className="btn">learn more</a>
          </div>
      </div>

      </div>

      </section>



      <section className="about" id="about">

      <h1 className="heading"> <span>about</span> avengers </h1>

      <div className="row">

          <div className="image">
              <img src={Logo10} alt=""/>
          </div>

          <div className="content">
              <h3>marvel avengers is amazing</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, optio consequuntur. Iusto molestias harum, doloremque recusandae at voluptate et voluptatibus, dolore, in reiciendis pariatur. Veritatis dicta ab dolor dignissimos eius!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates maxime nulla fuga ratione et commodi expedita qui suscipit culpa similique.</p>
              <a href="#" className="btn">learn more</a>
          </div>

      </div>

      </section>



      <section className="movies" id="movies">

      <h1 className="heading"> <span>marvel</span> movies </h1>

      <div className="box-container">

          <div className="box">
              <img src={Logo11} alt=""/>
              <div className="info">
                  <h3>marvel avengers 2012</h3>
                  <span> action, sci-fi, thriller, comedy </span>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos sint velit magni. Exercitationem modi assumenda odio, enim sequi voluptatem.</p>
                  <a href="#" className="btn">watch online</a>
              </div>
          </div>

          <div className="box">
              <img src={Logo12} alt=""/>
              <div className="info">
                  <h3>avengers age of ultron</h3>
                  <span> action, sci-fi, thriller, comedy </span>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos sint velit magni. Exercitationem modi assumenda odio, enim sequi voluptatem.</p>
                  <a href="#" className="btn">watch online</a>
              </div>
          </div>

          <div className="box">
              <img src={Logo13} alt=""/>
              <div className="info">
                  <h3>captain america civil war</h3>
                  <span> action, sci-fi, thriller, comedy </span>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos sint velit magni. Exercitationem modi assumenda odio, enim sequi voluptatem.</p>
                  <a href="#" className="btn">watch online</a>
              </div>
          </div>

          <div className="box">
              <img src={Logo14} alt=""/>
              <div className="info">
                  <h3>avengers infinity war</h3>
                  <span> action, sci-fi, thriller, comedy </span>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos sint velit magni. Exercitationem modi assumenda odio, enim sequi voluptatem.</p>
                  <a href="#" className="btn">watch online</a>
              </div>
          </div>

          <div className="box">
              <img src={Logo15} alt=""/>
              <div className="info">
                  <h3>thor ragnarok</h3>
                  <span> action, sci-fi, thriller, comedy </span>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos sint velit magni. Exercitationem modi assumenda odio, enim sequi voluptatem.</p>
                  <a href="#" className="btn">watch online</a>
              </div>
          </div>

          <div className="box">
              <img src={Logo16} alt=""/>
              <div className="info">
                  <h3>avengers endgame</h3>
                  <span> action, sci-fi, thriller, comedy </span>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos sint velit magni. Exercitationem modi assumenda odio, enim sequi voluptatem.</p>
                  <a href="#" className="btn">watch online</a>
              </div>
          </div>

      </div>

      </section>



      <section className="product" id="product">

      <h1 className="heading"> <span>marvelous</span> products </h1>

      <div className="box-container">

          <div className="box">
              <h3>product 1</h3>
              <img src={Logo17} alt=""/>
              <div className="price">$30.00</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat perspiciatis libero mollitia non accusamus recusandae modi iste harum animi?</p>
              <a href="#" className="btn">add to cart</a>
          </div>

          <div className="box">
              <h3>product 2</h3>
              <img src={Logo18} alt=""/>
              <div className="price">$30.00</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat perspiciatis libero mollitia non accusamus recusandae modi iste harum animi?</p>
              <a href="#" className="btn">add to cart</a>
          </div>

          <div className="box">
              <h3>product 3</h3>
              <img src={Logo19} alt=""/>
              <div className="price">$30.00</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat perspiciatis libero mollitia non accusamus recusandae modi iste harum animi?</p>
              <a href="#" className="btn">add to cart</a>
          </div>

          <div className="box">
              <h3>product 4</h3>
              <img src={Logo20} alt=""/>
              <div className="price">$30.00</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat perspiciatis libero mollitia non accusamus recusandae modi iste harum animi?</p>
              <a href="#" className="btn">add to cart</a>
          </div>

      </div>

    </section>


      <div className="footer">

      <div className="share">
          <a href="#"> <i class="fab fa-youtube"></i> youtube </a>
          <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
          <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
          <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
          <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
      </div>



      </div>




      <a href="#home" className="scroll-top">
      <img src={Logo21} alt=""/>
      </a>
    </>
  );
};

export default Home;

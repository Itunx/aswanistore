
import athena from "../images/athena.jpg";
import cloth from "../images/cloth.jpg";
import cloth2 from "../images/cloth2.jpg";
import cloth3 from "../images/cloth3.jpg";
import cloth4 from "../images/cloth4.jpg";
import cloth5 from "../images/cloth5.jpg";
import cloth6 from "../images/cloth6.jpg";
import cloth7 from "../images/cloth7.jpg";
import cloth8 from "../images/cloth8.jpg";
import cloth9 from "../images/cloth9.jpg";
import cloth10 from "../images/cloth10.jpg";
import suits from "../images/suits.jpg";
import dress5 from "../images/dress5.jpg";
import dress6 from "../images/dress6.jpg";
import dress8 from "../images/dress8.jpg";
import pic from "../images/pic.jpg";
import pic1 from "../images/pic1.jpg";
function Home(){
return(
    <div className="Home">
   <header className="App-header ">
            <div>
                <p className=" font-Tilt Warp text-center h-3 bg-black text-white  ">
                    Now shipping to all states in Nigeria
                </p>
            </div>
            <div className=" xl bg-black-10  h-16 border-t-2 p-2 ">
            <h1 className="font-Mynerve  text-center text-3xl font-semibold  ">
                Aswani clothing
            </h1>
                <div className="">
                    <ul className=" hidden md:flex flex-row">
                        <li className="mr-3 font-normal text-sm">Women</li>
                        <li className="mx-3 font-normal text-sm">Men</li>
                        <li className="mx-3 font-normal text-sm">About</li>
                        <li className="mx-3 font-normal text-sm">Ashani stories</li>
                    </ul>
                </div>
                <div className="search">
                <ul>
                    <li></li>
                    </ul> 
                </div>
            </div>
        <hr className=" bg-gray border-1 "/>
        <div>
          <p className="bg-cyan text-center h-8 text-white">SHOP SALE</p>
        </div>
        <nav className="relative container  mx-auto p-6">
          <div className="hidden md:flex items-center justify-between w-6/12 px-5 mr-6">
            <div className="pt-1"></div>

            <a href="outlet" className="hover:underline  hover:text-red-500">
              Outlet
            </a>
            <a
              name="newin"
              id="newin"
              href="newin"
              className="hover:underline hover:text-red-200, active:font-bold,"
              
            >
              new in
            </a>
            <a
              href="party season"
              className="hover:underline hover:text-red-200,active:font-bold,"
            >
              party season
            </a>
            <a
              href="clothing"
              className="hover:underline hover:text-red-200,active:font-bold"
            >
              Clothing
            </a>
            <a
              href="Shoesandaccessories"
              className="hover:underline hover:text-red-200,active:font-bold"
            >
              Shoes&accessories
            </a>
            <a
              href="curve"
              className="hover:underline hover:text-red-200,active:font-bold"
            >
              Curve
            </a>

            <a
              href="getstarted"
              className="p-3 px-6 pt-2 text-white bg-brightRedrounded-full baseline"
            >
              get started
            </a>
          </div>
        </nav>
     </header> 

   <hr className="hidden md:block"/>

        <div className="  md:flex flex-row">
            <div className="md:block">
                <img src={athena} alt="" className=""></img>
            </div>  
            <div className="p-0 md:block md: py-4 px-3"> 
                <br className="hidden md:block"/>
                <br className="hidden md:block"/>
                <br className="hidden md:block"/>
                <br className="hidden md:block"/>
                <br className="hidden md:block"/> <br className="hidden md:block"/> <br className="hidden md:block"/>
                <p className="text-xm md:block text-4xl font-bold">Modern Utility
                </p>
                <br></br>
                <p>Discover the limited edition capsule of utilitarian-inspired workwear. </p>
                <br/>
                <br/>
                <div className="flex justify-center">
            <button
              type="button"
              className=" px-6 py-3 bg-black text-white mx-4 border-2 border-blue-600 text-blue-600 font-medium text-xl   hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Shop Men
            </button>
            <button className=" px-6 py-3   bg-black text-white border-2 border-blue-600 text-blue-600 font-medium text-xl   hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Shop Women
            </button>
          </div>
            </div>
        
        </div>

        <br/>
        <br/>
        <br/>
        <h1 className=" text-3xl md:text-4xl text-center font-semibold">
        Shop by Category
      </h1>
        <br/>
        <br/>
        <div className="">
            <div className="flex">
                <img src={cloth} alt=""></img>
                <img src={cloth2} alt=""></img>
                <img src={cloth3} alt=""></img>
                <img src={cloth4} alt=""></img>
            </div>
            <div className="flex">
                <img src={cloth5} alt=""></img>
                <img src={cloth6} alt=""></img>
                <img src={cloth7} alt=""></img>
                <img src={cloth8} alt=""></img>
            </div>
      </div>
       <br></br>
      <br></br>
         <p className="text-2xl  md: text-center text-5xl font-bold font-Sans py-10 ">
        Fashion is a dirty<br></br> business,We're on a<br></br> Mission to
        clean it up
      </p>
      <br/> <br/>
      <div className="md:flex">
        <div className="">
          <img src={cloth9} alt=""></img>
          {/* <button class=" ">Button</button> */}
        </div>
        <div className="">
          <img src={cloth10} alt=""></img>
        </div>
      </div>
      <br></br>
      <p className="text-center text-4xl font-semibold py-7 px-5">
        Wear Now Love Forever
      </p>
      <div className="m-20 my-7 py-10 flex">
        <figure>
          <img src={suits} alt="" className="rounded-xl m-5" />
          <figcaption className="px-3 text-xs">
            The way-high cost suit $100
          </figcaption>
        </figure>

        <figure>
          <img src={dress5} alt="" className="rounded-xl m-5" />
          <figcaption className="px-3 text-xs">
            {" "}
            The fashionista ready-made $50
          </figcaption>
        </figure>

        <figure>
          <img src={dress6} alt="" className="rounded-xl m-5"></img>
          <figcaption className="px-3 text-xs">
            The aso oke cloth-special-occasions $80
          </figcaption>
        </figure>

        <figure>
          <img src={dress8} alt="" className="rounded-xl m-5"></img>
          <figcaption className="px-3 text-xs">
            The classic man wears $150
          </figcaption>
        </figure>
      </div>
    </div>
)
}
export default Home
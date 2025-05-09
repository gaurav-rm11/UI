import { useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'


function App() {
    let[showContent, setShowContent]=useState(false)
    useGSAP(()=>{
      const t1= gsap.timeline();

      t1.to(".vi-mask-group",{
        rotate:10,
        duration:2,
        ease:"Power4.easeInOut",
        transformOrigin: "50% 50%"
      }).to(".vi-mask-group",{
        scale:10,
        duration:2,
        ease:"expo.inOut",
        delay:-1.8,
        transformOrigin: "50% 50%",
        opacity:0,
        onUpdate:function(){
          if(this.progress()>=0.9){
            document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
          }
        }
      })
    });

    useGSAP(()=>{
      if (!showContent) return;

      gsap.to(".main",{
        rotate:0,
        scale:1,
        duration:2,
        ease:"expo.inOut",
        delay:-1
      });
      gsap.to(".sky",{
        rotate:0,
        scale:1,
        duration:2,
        ease:"expo.inOut",
        delay:-1.2
      });
      gsap.to(".bg",{
        rotate:0,
        scale:1,
        duration:2,
        ease:"expo.inOut",
        delay:-0.8
      });
      gsap.to(".girlbg",{
        rotate:0,
        scale:0.8,
        duration:2,
        ease:"expo.inOut",
        delay:-0.8,
        x: "-50%",
        bottom:"-65%"
      });
      gsap.to(".text",{
        rotate:0,
        scale:0.8,
        duration:2,
        ease:"expo.inOut",
        delay:-0.8,
      });

      const main = document.querySelector(".main");
      
      main?.addEventListener("mousemove",function(e){
        let currx = e.clientX
        let curry = e.clientY
        console.log(currx, curry)

        let movex = (currx/window.innerWidth -0.5)*40
        gsap.to(".main .imagesdiv .text",{
          x: `${movex *0.5}%`
        })
        gsap.to(".sky",{
          x:movex
        })
        gsap.to(".bg",{
          x:movex*1.2
        })
      });
    },[showContent])
  return (
    <>
        <div className="svg bg-black h-screen w-screen fixed top-0 left-0 z-100 overflow-hidden">
          <svg viewBox='0 0 800 600' preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black"/>
                <g className="vi-mask-group">
                <text
                  x="50%"
                  y="30%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
              </mask>
            </defs>
            <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
          </svg>
      </div>
      {showContent && (
        <div className="main h-full w-full bg-black rotate-[-10deg] scale-[1.7]">
          <div className="landing w-full overflow-hidden relative h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-120 flex w-full py-10 px-10 gap-5">
              <div className="menu flex  flex-col gap-1">
                <div className="line w-10 h-1 bg-white"></div>
                <div className="line w-6 h-1 bg-white"></div>
                <div className="line w-3 h-1 bg-white"></div>
              </div>
              <div className="logo">
                <h3 className="text-white text-2xl mt-[-6px] leading-none"  style={{ fontFamily: 'pricedown' }}>Rockstar</h3>              
              </div>
            </div>
            
            <div className="imagesdiv relative w-full h-screen ">
              <img src="/sky.png"  className="sky w-full h-full scale-[1.4] rotate-[-20deg] absolute top-0 left-0" />
              <img src="/bg.png" className="bg w-full h-full scale-[1.8] rotate-[-8deg] absolute top-0 left-0" />
              <div className="text text-while  scale-[1.4] rotate-[-10deg] absolute flex flex-col gap-3 top-20 left-1/2 -translate-x-1/2 -translate-y-9 text-white text-9xl leading-none" style={{fontFamily:'pricedown'}}>
              <h1 className="text-[8rem] leading-none -ml-40">Grand</h1>
              <h1 className="text-[8rem] leading-none ml-20">Theft</h1>
              <h1 className="text-[8rem] leading-none -ml-40">Auto</h1>
            </div>
              <img src="/girlbg.png" className="girlbg  rotate-[-15deg] absolute left-1/2 -translate-x-1/2 scale-[1.4]  -bottom-[65%] " />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4">
                <i className="ri-arrow-down-line"></i>
                <h3 className="">Scroll Down</h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen  flex items-center justify-center bg-black top-30">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-80"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-4xl" style={{ fontFamily: 'pricedown' }}>trying modern ui</h1>
                <h1 className="text-4xl" style={{ fontFamily: 'pricedown' }}>deploying first time</h1>
                <p className="mt-10 leading-none " style={{ fontFamily: 'helveticanow' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 leading-none " style={{ fontFamily: 'helveticanow' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-10 leading-none" style={{ fontFamily: 'helveticanow' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-8 py-8 text-black mt-7 text-3xl" style={{ fontFamily: 'pricedown' }}>
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </>
  )
}

export default App

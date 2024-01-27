import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>



        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Dream Big, Think Differently, Work Hard, Achieve More!
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            I am a Freelance Data Analyst and a programmer, specializing in transforming raw data into meaningful insights. With a passion for data and programming, I have successfully completed multiple projects for clients across various industries and domains, delivering high-quality and accurate work in data analysis and interpretation, predictive modeling, data visualization, web development, and GUI programming.<br/>
              
            </p>
  <p className='font-medium capitalize mt-4 text-base'>
              I have over 6 years of experience in using a range of tools and languages, such as R, Python, JMP, SPSS, Excel, React, PHP, Wix, WordPress, Java, C#, C++, and VB, to handle complex datasets, build predictive models, create visually appealing data representations, and develop user-friendly web applications and interfaces. Currently, I am enhancing my skills and knowledge in data science by pursuing a Master's degree at Moringa School, one of the leading institutions in this fast-growing field. My goal is to leverage my expertise to drive innovation and provide tangible value to businesses.
               </p>
        </div>
    </section>
  )
}

export default AboutCoverSection

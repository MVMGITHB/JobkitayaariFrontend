import { SideBar } from "./SideBar";
import { RightSideBar } from "./RightSideBar";
import base_url from "../helper/helper";


export const ArticleHome = ({ data }) => {

  // const isoDate = "2025-04-10T09:41:10.884Z";
  const date = new Date(data?.createdAt);
  
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  
  const formattedDate = `${day}/${month}/${year}`;

  console.log("--data--", data)
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Article",
    "headline": data?.title,
    "image": {
      "@type": "ImageObject",
      "url": `${base_url}${data?.image}`,
      "width": 800,
      "height": 450,
    },
    "author": {
      "@type": "Person",
      "name": data?.author?.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": data?.author?.name,
      "logo": {
        "@type": "ImageObject",
        "url": "publisherLogo",
        "width": "publisherLogoWidth",
        "height": "publisherLogoHeight"
      }
    },
    "datePublished": formattedDate
  };

console.log(data?.faqs[0]?.ques)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": data?.faqs[0]?.ques,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data?.faqs[0]?.ans
        }
      },
      {
        "@type": "Question",
        "name": data?.faqs[1]?.ques,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data?.faqs[1]?.ans
        }
      },
      {
        "@type": "Question",
        "name": data?.faqs[2]?.ques,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data?.faqs[2]?.ans
        }
      },
      {
        "@type": "Question",
        "name": data?.faqs[3]?.ques,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data?.faqs[3]?.ans
        }
      },
      {
        "@type": "Question",
        "name": data?.faqs[4]?.ques,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data?.faqs[4]?.ans
        }
      },
         ]
  };

  return (

    <> 

<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
    <div className=" w-full md:w-1/5">
      <SideBar />
    </div>

    {/* <div className=' w-full md:w-3/5 shadow-md p-4'>
                <h2 className=' text-black font-bold'> {data?.title}</h2>
                 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sit quod quo rerum doloremque neque ullam itaque, sunt eius amet, nostrum totam minus eaque quisquam veniam nisi in cumque possimus ipsa consequatur dolor beatae! Voluptas ducimus commodi quibusdam quod dolorum mollitia tempora aliquam et corrupti, saepe magni at illo doloremque, ea voluptate reiciendis fugit nobis sit iste iure obcaecati labore? Eligendi, ipsa expedita sunt cum cupiditate laudantium ducimus iusto sapiente tenetur adipisci. Id rem fuga voluptates saepe, voluptatibus ut est dolores eos impedit veritatis. Consequuntur vero, quis perspiciatis sit fugit delectus suscipit animi magnam eaque alias, iste vitae repellat unde quidem! Dignissimos incidunt omnis esse repellendus aut, aperiam qui sunt magnam beatae. Voluptatibus dolorum, molestias adipisci tempore aut libero non dolores cum dolorem aperiam aliquid natus officia deleniti ducimus totam. Nemo illo corporis voluptatum non quas earum quo similique, assumenda deserunt, architecto praesentium repudiandae explicabo aut fugit dicta ipsam! Explicabo, saepe enim at accusantium quasi vitae magni. Veniam blanditiis ratione suscipit tempore. Vitae eligendi consectetur provident maiores dolor aut tempore suscipit sunt laudantium autem ipsa assumenda obcaecati qui, at quia voluptas odit quidem minus quas eos. Voluptates, odit. Incidunt officiis nostrum quod sed alias cum veritatis sint mollitia, at quibusdam.</p>
          </div> */}

    <div className=" w-full md:w-3/5 shadow-md p-4">
      <h1 class="heading-primary1">{data?.title}</h1>
      <div className="blog-image-container">
        <img
          src={`${base_url}${data?.image}`}
          alt="Blog Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* <p class='heading-secondary-para'>We all try to put in our best efforts during the job interview process. All of us try that we get succeed in impressing the person who is taking our interview so that we get our dream jobs </p>
<p class='heading-secondary-para'>People put a lot of effort into getting an interview call and despite putting in their best-efforts people still make certain mistakes that significantly hamper their performance during the job interview process.</p>
<p class='heading-secondary-para'>In this article, we will make your job search easier by sharing with you the key mistakes people make during job interviews that create a bad impression on the interviewer.</p>
<p class='heading-secondary-para'>Below are the key mistakes you can’t afford to make during the job interview if you want to get selected for the job:</p>




<div class='content-container'>
  
  <h4 className='sub-heading'>(1) Never arrive late for an interview </h4>

  <p class='list-padding'>Always make sure that you arrive well before scheduled interview time. Being punctual always makes a good impression on the interviewer. Just in case you are late for an interview, make sure to inform HR well before time.
  </p>


  <h4 className='sub-heading'>(2) Never go for an interview without knowing about the company’s products & services </h4>

  <p class='list-padding'>Make sure you know key information about the company, its products and services, etc. Also, take clarity of the role from the HR beforehand.
  </p>


  <h4 className='sub-heading'>(3) Never talk negatively about previous organization</h4>

  <p class='list-padding'>Make sure to be positive throughout your interview. Use words wisely and positively to describe even the adverse situation. Avoid talking negatively about previous organizations.
  </p>


  <h4 className='sub-heading'>(4) Don’t be too loud or too low while giving answers </h4>

  <p class='list-padding'> Never give answers too loudly, answer in a clear and crisp voice but never shout or raise your voice. Don’t be too low as well as it will show that you’re not enthusiastic about interview.
  </p>


  <h4 className='sub-heading'>(5) Don’t give vague answers to the questions asked by the interviewer </h4>

  <p class='list-padding'>Always give to the point and crisp answers, you can always state a few examples of some data as well in support of your answers. If you don’t know the answer, inform the interviewer about it.
  </p>


  <h4 className='sub-heading'>(6) Never be sad or low on energy during an interview</h4>

  <p class='list-padding'>Never show a sad face or low on energy face in interview. Your energy and enthusiasm make a huge impact during the interview. Greet everyone with a smile when you enter the interview room. 
  </p>

</div> 

<p class='heading-secondary-para'>Below are the key mistakes you can’t afford to make during the job interview if you want to get selected for the job:</p>



<h4 className='heading-primary1'>FAQs:</h4>

<p class='heading-secondary-para'>Q1. What time should one reach for a scheduled interview?</p>
<p class='heading-secondary-para'>Ans. You should reach twenty minutes before the scheduled interview time.</p>
<p class='heading-secondary-para'>Q2.  Can we say bad management as reason for leaving job?</p>
<p class='heading-secondary-para'>Ans. We can avoid saying that management was bad or unprofessional. We can mention that I have worked in organizations that had amazing working environment in comparison to the last one.</p>
<p class='heading-secondary-para'>Q3.  What if I don’t know complete answer to a question asked during interview?</p>
<p class='heading-secondary-para'>Ans. Always start with saying that I am not too sure about this one however I have some information on this topic that I can share with you.</p>
<p class='heading-secondary-para'>Q4. What should I do if I am reaching late for the interview?</p>
<p class='heading-secondary-para'>Ans. If you are reaching late for the interview, it’s better to inform the HR in advance and give them an expected time of arrival. </p>


*/}

      {data ? (
        <>
          <div
            id="artice-main"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </>
      ) : (
        <></>
      )}
    </div>


    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

    <div className=" w-full md:w-1/5">
      <RightSideBar />
    </div>
  </div></>
   
  );
};

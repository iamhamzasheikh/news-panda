import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  articles = [
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Tom Warren",
    "title": "Microsoft's new Copilot will change Office documents forever - The Verge",
    "description": "Microsoft’s new Copilot for Office documents feels like the future. The AI Copilot system can generate documents, slides, and even act as an assistant to help you use Office apps.",
    "url": "https://www.theverge.com/2023/3/17/23644501/microsoft-copilot-ai-office-documents-microsoft-365-report",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/FRBC6Ge0eAbFQ33e2TAGbbl8E90=/0x0:1000x563/1200x628/filters:focal(500x282:501x283)/cdn.vox-cdn.com/uploads/chorus_asset/file/24515603/m365copilot_business_1920x1080_web__1_.png",
    "publishedAt": "2023-03-17T14:06:52Z",
    "content": "Copilot is more than just a chatbot. Microsoft is slowly building an AI assistant that it has dreamed about for years.\r\nByTom Warren / @tomwarren\r\nMar 17, 2023, 2:06 PM UTC|Comments\r\nMicrosofts new A… [+10344 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Emily Rauhala",
    "title": "Turkey expected to back Finland for NATO membership, snub Sweden - The Washington Post",
    "description": "Turkish President Recep Tayyip Erdogan has played spoiler for much of the past 10 months.",
    "url": "https://www.washingtonpost.com/world/2023/03/17/finland-nato-turkey-erdogan/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2EBF675CBZBOOI3ZLTD44EILLQ_size-normalized.jpg&w=1440",
    "publishedAt": "2023-03-17T13:56:46Z",
    "content": "Comment on this story\r\nBRUSSELS In May 2022, when Finnish and Swedish officials announced their intention to join the NATO alliance, in a historic shift for both countries, there was talk of a quick … [+6305 chars]"
    },
    {
    "source": {
    "id": "axios",
    "name": "Axios"
    },
    "author": "Rebecca Falconer",
    "title": "TikTok CEO says forced sale won't address U.S. security concerns as more nations announce bans - Axios",
    "description": "TikTok CEO Shou Zi Chew's comments to the WSJ coincided with the U.K. and New Zealand announcing restrictions due to security concerns.",
    "url": "https://www.axios.com/2023/03/17/tiktok-ceo-forced-sale-wont-address-security-concerns",
    "urlToImage": "https://images.axios.com/UBq503lYb5_yn8gE6S3R3IFqYfI=/1366x768/smart/2023/03/17/1679021257475.jpg",
    "publishedAt": "2023-03-17T13:39:44Z",
    "content": "TikTok CEO Shou Zi Chew insisted Thursday that forcing the app's Chinese parent company, Bytedance, to sell it would not address the the national security concerns of the U.S. and other governments.\r… [+2075 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Brian Lowry",
    "title": "'Swarm' review: Dominique Fishback stars in Donald Glover's stinging satire about excessive fandom - CNN",
    "description": "The producers of \"Swarm,\" a new Amazon series co-created by Donald Glover and Janine Nabers, have issued a \"Do not spoil\" list that precludes detailing much about the show beyond the fact the seven episodes were shot in color. But there is a lot to be said ab…",
    "url": "https://www.cnn.com/2023/03/17/entertainment/swarm-review/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230314175419-01-swarm-prime.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-17T13:31:00Z",
    "content": "The producers of Swarm, a new Amazon series co-created by Donald Glover and Janine Nabers, have issued a Do not spoil list that precludes detailing much about the show beyond the fact the seven episo… [+2705 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Peoria Journal Star"
    },
    "author": "Leslie Renken",
    "title": "Dangerous strep throat cases on the rise in the Peoria area. Here's what you need to know - Peoria Journal Star",
    "description": "Two central Illinois children who died were seemingly healthy before being diagnosed with strep.",
    "url": "https://www.pjstar.com/story/news/2023/03/16/potentially-deadly-strep-throat-cases-on-the-rise-in-the-peoria-area/70013361007/",
    "urlToImage": "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2021/09/15/USATODAY/usatsports/247WallSt.com-247WS-951928-imageforentry4-rjr.jpg?width=1365&height=768&fit=crop&format=pjpg&auto=webp",
    "publishedAt": "2023-03-17T13:21:22Z",
    "content": "PEORIA In the six years Jamie Harwood has been the coroner in Peoria County, he has never seen a case of strep throat result in death until this year. \r\nSince late February, two central Illinois chil… [+5191 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Michael Wayland",
    "title": "General Motors' China business is hurting, and it's not just because of Covid - CNBC",
    "description": "GM's market share in the country, including its joint ventures, has plummeted 34% since 2015, for multiple reasons.",
    "url": "https://www.cnbc.com/2023/03/17/general-motors-china-problems.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107206113-1678391788613-gettyimages-1246607044-SAIC_GM_Wuling_New_Energy_Vehicle.jpeg?v=1679059201&w=1920&h=1080",
    "publishedAt": "2023-03-17T13:20:01Z",
    "content": "A worker checks the quality of a vehicle before rolling off the assembly line at the production workshop of SAIC General Motors Wuling in Qingdao, East China's Shandong province, Jan. 28, 2023. (Phot… [+11008 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Sarah Elbeshbishi, USA TODAY",
    "title": "Chinese President Xi Jinping to visit Russia in show of support amid war in Ukraine: live updates - USA TODAY",
    "description": "Chinese President Xi Jinping is set to meet with Russian President Vladimir Putin in what appears to be a show of support amid the war in Ukraine.",
    "url": "https://www.usatoday.com/story/news/world/ukraine/2023/03/17/ukraine-russa-war-live-updates/11490937002/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/17/USAT/fc527655-a441-4be0-aca9-7151df6d7cb3-AP_Russia_Ukraine_War.jpg?auto=webp&crop=6000,3375,x0,y28&format=pjpg&width=1200",
    "publishedAt": "2023-03-17T13:10:21Z",
    "content": "Chinese President Xi Jinping is set to visit Russia next week in what appears to be a show of support for Russian President Vladimir Putin amid the sharpening global tensions over the war in Ukraine.… [+3226 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Justine Calma",
    "title": "Extrapolations: the real science behind Apple’s climate change drama - The Verge",
    "description": "The new Apple TV series Extrapolations is a star-studded drama about climate change. The Verge has your guide to the real and sometimes controversial science underpinning the first three episodes.",
    "url": "https://www.theverge.com/23643667/apple-extrapolations-show-science-guide-climate-change",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/TJy_eTnsk3vksfx7giwEvUP8aVs=/0x0:8640x5760/1200x628/filters:focal(4320x2880:4321x2881)/cdn.vox-cdn.com/uploads/chorus_asset/file/24513904/Extrapolations_Photo_010101.jpg",
    "publishedAt": "2023-03-17T13:00:00Z",
    "content": "The real (and sometimes controversial) science behind Apples Extrapolations\r\nThe real (and sometimes controversial) science behind Apples Extrapolations\r\n / The Verge breaks down whats real and whats… [+7362 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "",
    "title": "2023 March Madness live stream: NCAA Tournament TV schedule, watch basketball streaming online Friday - CBS Sports",
    "description": "Here's what you need to know about the first-round action headlining the NCAA Tournament slate on Friday",
    "url": "https://www.cbssports.com/college-basketball/news/2023-march-madness-live-stream-ncaa-tournament-tv-schedule-watch-basketball-streaming-online-friday/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/17/ecbf227b-5a46-4135-b564-1d75294f95e4/thumbnail/1200x675/0efa91952dcd7297f05fa05e5794c2ab/pitino.jpg",
    "publishedAt": "2023-03-17T13:00:00Z",
    "content": "2023 NCAA Tournament brackets have already been busted all over the country with historic upsets as the March Madness picture has been shaken up after the first day of first-round action. Whether it'… [+3865 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ingrid Lunden",
    "title": "SVB Financial files for Ch. 11 bankruptcy protection, says it has $2.2B in liquidity - TechCrunch",
    "description": "It plans to file a motion to resume business while looking for buyers of its assets \"in the coming days.\"",
    "url": "https://techcrunch.com/2023/03/17/svb-financial-files-for-ch-11-bankruptcy-protection-says-it-has-2-2b-in-liquidity/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/svb-scanlines.jpg?resize=1200,786",
    "publishedAt": "2023-03-17T12:40:57Z",
    "content": "One week after trading was halted for SVB Financial and regulators took control of the holding company for Silicon Valley Bank and other subsidiaries, SVB Financial has taken the next inevitable step… [+3695 chars]"
    },
    {
    "source": {
    "id": "the-wall-street-journal",
    "name": "The Wall Street Journal"
    },
    "author": "Gunjan Banerji, Charley Grant, Caitlin Ostroff, Raffaele Huang, Dave Sebastian",
    "title": "Stock Market Today: ; Dow Futures Drop, Credit Suisse and First Republic Fall - The Wall Street Journal",
    "description": "Live updates of what's moving markets, including the Dow, S&P 500 and Nasdaq Composite.",
    "url": "https://www.wsj.com/livecoverage/stock-market-news-today-03-17-2023",
    "urlToImage": "https://images.wsj.net/im-589547/social",
    "publishedAt": "2023-03-17T12:38:54Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Eonline.com"
    },
    "author": "Kisha Forde",
    "title": "Why Tyra Banks Is Leaving Dancing With the Stars After Hosting 3 Seasons - E! NEWS",
    "description": "Dancing With the Stars host Tyra Banks recently teased her exit from the Disney+ competition show. See what the supermodel had to say about stepping off the ballroom floor.",
    "url": "https://www.eonline.com/news/1368387/why-tyra-banks-is-leaving-dancing-with-the-stars-after-hosting-3-seasons",
    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202238/rs_1200x1200-220408104910-1200-DANCING_WITH_THE_STARS-tyra_banks-gj.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    "publishedAt": "2023-03-17T12:20:00Z",
    "content": "Tyra Banks says she's ready to step off the ballroom floor.The Dancing With the Stars emceewhose been co-hosting the competition show since 2020recently revealed that her focus has shifted on to her … [+788 chars]"
    },
    {
    "source": {
    "id": "politico",
    "name": "Politico"
    },
    "author": null,
    "title": "Garcia backing Johnson for Chicago mayor - POLITICO - POLITICO",
    "description": null,
    "url": "https://www.politico.com/newsletters/illinois-playbook/2023/03/17/garcia-backing-johnson-for-chicago-mayor-00087591",
    "urlToImage": "https://static.politico.com/c9/9d/26ca767547a78504f358101bf804/imageedit-6-6672910834.jpg",
    "publishedAt": "2023-03-17T12:18:04Z",
    "content": "TGIF, Illinois. May every shamrock bring you joy and good luck this weekend.\r\nTOP TALKER\r\nRep. Jesus \"Chuy\" Garcia,' photographed when he announced his own run for mayor, is now backing Brandon Johns… [+11731 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Joseph Ataman, Aurore Laborie, Jack Guy",
    "title": "Hundreds detained in fiery protests after French government forces through higher retirement age - CNN",
    "description": "At least 310 people have been detained across France as the embattled government faces backlash for forcing through pension reforms that will see the country's retirement age raised by two years.",
    "url": "https://www.cnn.com/2023/03/17/europe/france-pension-reform-intl/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230317095033-01-france-protests-031723.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-17T12:14:00Z",
    "content": "At least 310 people have been detained across France as the embattled government faces backlash for forcing through pension reforms that will see the countrys retirement age raised by two years. \r\nIn… [+4405 chars]"
    },
    {
    "source": {
    "id": "axios",
    "name": "Axios"
    },
    "author": "Emily Peck",
    "title": "SVB employees blame remote work for bank failure - Axios",
    "description": "What happened at Silicon Valley Bank will likely enter the broader return-to-office debate.",
    "url": "https://www.axios.com/2023/03/17/svb-employees-blame-remote-work-for-bank-failure",
    "urlToImage": "https://images.axios.com/DOGvDnqeQHIs_lucik8CJ7A2oFQ=/0x0:1920x1080/1366x768/2023/03/16/1679000509980.jpg",
    "publishedAt": "2023-03-17T12:08:14Z",
    "content": "In a story in the Financial Times out Thursday, current and former Silicon Valley Bank employees cited the bank's commitment to remote work as one reason for its failure.\r\nWhy it matters: In the afte… [+2772 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Manuel Bojorquez",
    "title": "Florida beaches could be dealt a one-two punch of red tide and giant seaweed blob - CBS News",
    "description": "A toxic algae bloom is already killing fish along the Gulf Coast, causing a stench. Now, a blob of seaweed twice as wide as the United States is drifting across the Atlantic.",
    "url": "https://www.cbsnews.com/news/seaweed-blob-florida-red-tide-sargassum-beaches/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/03/17/8d34b521-28c3-4f9d-bda0-aa8dfb489078/thumbnail/1200x630/419a0435bc2335b058a2a9b7c2f6672a/beachfla.png",
    "publishedAt": "2023-03-17T11:49:30Z",
    "content": "Some of Florida's most popular beaches could be in for a one-two punch of trouble as thousands of spring breakers flock to the Sunshine State. \r\nA toxic algae bloom known as red tide is already killi… [+3452 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Annette Choi, Han Vu",
    "title": "Ozempic shortage: Diabetes patients at risk as TikTok and telehealth prescriptions fuel drug demand - CNN",
    "description": "Telehealth and social media are playing a significant role in driving demand for Ozempic, a prescription drug that treats Type 2 diabetes, experts told CNN. The current drug shortage has limited access for patients with diabetes who rely on it to control thei…",
    "url": "https://www.cnn.com/2023/03/17/health/ozempic-shortage-tiktok-telehealth/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230316130100-20230316-ozempic-shortage-card.png?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-17T11:47:00Z",
    "content": "Telehealth and social media are playing a significant role in driving demand for Ozempic, a prescription drug that treats Type 2 diabetes, experts told CNN. The current drug shortage has limited acce… [+5984 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Nytlicensing.com"
    },
    "author": "Benjamin Mueller",
    "title": "New Data Links Pandemic’s Origins to Raccoon Dogs at Wuhan Market - Yahoo News",
    "description": "An international team of virus experts said Thursday that they had found genetic data from a market in Wuhan, China, linking the coronavirus with raccoon...",
    "url": "https://nytlicensing.com/stories/AaT4nQ24",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ZNfzVadn4IjlN8bzUQxmTA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/318db990-c4c0-11ed-bafb-30df6db2afdb",
    "publishedAt": "2023-03-17T11:37:24Z",
    "content": "An international team of virus experts said Thursday that they had found genetic data from a market in Wuhan, China, linking the coronavirus with raccoon dogs for sale there, adding evidence to the c… [+7116 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Russian Jet Shoots Down U.S. Drone | Turkey Following U.S. Drone Incident In Black Sea | Drone Wars - CNN-News18",
    "description": "Russian Jet Shoots Down U.S. Drone | Turkey Following U.S. Drone Incident In Black Sea | Drone WarsTop US marine issues WW3 warning as Russian jets down Amer...",
    "url": "https://www.youtube.com/watch?v=wewDCpFioBQ",
    "urlToImage": "https://i.ytimg.com/vi/wewDCpFioBQ/maxresdefault_live.jpg",
    "publishedAt": "2023-03-17T10:40:43Z",
    "content": null
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": null,
    "title": "Edmonton officers Travis Jordan and Brett Ryan killed as teen allegedly shoots mother, opens fire on police - CBS News",
    "description": "The teen took his own life after the shootings in Edmonton, Alberta, according to a police official and a senior government official.",
    "url": "https://www.cbsnews.com/news/edmonton-officers-travis-jordan-brett-ryan-killed-teen-allegedly-shoots-mother-police/",
    "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/17/efceb578-67df-4fb4-87fb-4c774454ce28/thumbnail/1200x630/00fc080232999c7d8d9f01bfc8037722/ap23075551068068.jpg",
    "publishedAt": "2023-03-17T10:32:36Z",
    "content": "A 16-year-old wounded his mother with a firearm and then killed two police officers before taking his own life in western Canada early Thursday, officials told The Associated Press.\r\nA police officia… [+3673 chars]"
    }
    ]
  constructor() {
    super()
    this.state =  {
      articles: this.articles,
      loading: true,
      page: 1
    }
  }

    async componentDidMount(){
      let url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=09e4cbbb39054ae399e765b1e8d14f15&page=1'
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
    }

  handleNextClick = () =>{
    console.log("Next Clicked")
    this.setState({
      page: this.state.page+1,
    })
  }
  handlePreviousClick = () =>{
    console.log("previous Clicked")
    
  }

  render() {
    return (
      <>
      <div className='container my-3' > 
      <h2>News-Monkey Top Haedings </h2>
      <div className="row">
      {this.state.articles.map((element)=>{
        return  ( <div className='col-md-4' key={element.url}>
        <Newsitem title={element.title ? element.title.slice(0, 16): "Title not found"}
         description={element.description ? element.description.slice(0, 55) : "Description not found"}
        imageUrl={element.urlToImage} alt={element.title} 
        newsurl = {element.url} /> </div>)
      })}
      </div>

      <div className='d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick} >&larr; Previous</button>
      <button type="button" className="btn btn-dark"onClick={this.handleNextClick} >Next &rarr;</button>
      </div>
      </div>
      </>
    )
  }
}

export default News


// find the error in this component
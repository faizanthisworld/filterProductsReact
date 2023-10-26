import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";
import Video from "./components/Video";
import { Google, Facbook,Amazon,Whatsapp,Twitter,Linkedin,apple,Apple } from "./assets/images";
import "./index.css";
import { useState } from "react";

function App() {
const [searchQuery,setSearchQuery] = useState('')
  const products = [
    {
      id : 0,
      title: 'Amazon',
      desc : "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence",
      img : Amazon
    },
    {
      id : 1,
      title: 'apple',
      desc : "Apple Inc. is an American multinational technology company headquartered in Cupertino, California. As of March 2023, Apple is the world's biggest company by market capitalization, and with US$394.3 billion the largest technology company by 2022 revenue.",
      img : Apple
    },
    {
      id : 2,
      title: 'google',
      desc : "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics",
      img : Google
    },
    {
      id : 3,
      title : 'facebook(meta)',
      desc : "Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook, Instagram, Threads, and WhatsApp, among other products and services.",
      img : Facbook
    },
    {
      id : 4,
      title : 'twitter(X)',
      desc  :"Twitter, Inc. was an American social media company based in San Francisco, California. The company operated the social networking service Twitter and previously the Vine short video app and Periscope livestreaming service.",
      img : Twitter
    },
    {
      id : 5,
      title : 'whatsapp',
      desc  :"WhatsApp is a freeware, cross-platform, centralized instant messaging and voice-over-IP service owned by United States tech conglomerate Meta Platforms. It allows users to send text, voice messages and video messages, make voice and video calls, and share images, documents, user locations, and other content.",
      img  : Whatsapp
    },
    {
      id : 6,
      title : 'linkedin',
      desc : "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003. Since December 2016, it has been a wholly owned subsidiary of Microsoft.",
      img : Linkedin
    }
  ]
 const filterProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const changeHandle = (e) =>  {
    setSearchQuery(e.target.value)
  }
  return (
    <div className="container">
      <h1>My Products</h1>
       
      <input 
      type="text"
      placeholder="search products"
      value={searchQuery}
      onChange={changeHandle}
      />
       
{filterProducts.length == 0 ? <h3>Opps! No Products Found</h3> : "" }
{filterProducts.length != 0 ? <h3> {filterProducts.length} products </h3> : "" }
{filterProducts.map(product => <Video key={product.id} title={product.title} desc={product.desc} img={product.img} />)}
      
    </div>
  );
}

export default App;

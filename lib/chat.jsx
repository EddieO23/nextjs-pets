import {useState} from "react"

export default function Chat() {
    
    const [isChatOpen, setIsChatOpen] = useState(false)

function openChatClick () {
    setIsChatOpen(true)
}
function closeChatClick () {
    setIsChatOpen(false)
}

    return (
       <>
       <div className="open-chat" onClick={openChatClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chat-text-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
</svg></div>
        <div className={isChatOpen ? "chat-container chat-container--visible" : "chat-container" }>
          <div className="chat-title-bar">
            <h4>Staff team Chat!!</h4>
            <svg onClick={closeChatClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
</svg>
          </div>
          <div className="chat-log">
            <div className="chat-message">
              <div className="chat-message-inner">
                We need to reach out for the latest contact for PURRSLOUD
              </div>
            </div>
            <div className="chat-message">
              <div className="chat-message-inner">
                Bob, can you do that?
              </div>
            </div>
            <div className="chat-message">
              <div className="chat-message-inner">
                We need to reach out for the latest contact for PURRSLOUD
              </div>
            </div>
            <div className="chat-message">
              <div className="chat-message-inner">
                Bob, can you do that?
              </div>
            </div>
            <div className="chat-message">
              <div className="chat-message-inner">
                We need to reach out for the latest contact for PURRSLOUD
              </div>
            </div>
            <div className="chat-message">
              <div className="chat-message-inner">
                Bob, can you do that?
              </div>
            </div>
            <div className="chat-message chat-message--self">
              <div className="chat-message-inner">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis deleniti repellendus maiores, accusantium explicabo hic sunt rerum quo laudantium nam placeat quisquam fugit tempora nulla? Unde id commodi exercitationem recusandae.
              </div>
            </div>
          </div>
          <form>
            <input type="text" autoComplete="off" placeholder="Your message here" />
          </form>
        </div>
       </> 
    )
}
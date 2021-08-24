import {ChatEngine} from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from "./components/LoginForm";

function App() {
    if (!localStorage.getItem('username')) return <LoginForm/>;
    return (
        <div className="App">
            <ChatEngine
                height="100vh"
                projectID="4989cf9f-6066-4aa7-a994-6629771160d0"
                userName="Fayas"
                userSecret="Fayas123##"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
        </div>
    );
}

export default App;

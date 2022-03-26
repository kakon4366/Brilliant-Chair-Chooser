import React from 'react';
import './QuestionAns.css';

const QuestionAns = () => {
    return (
        <div className='qustion-ans'>
            <h2>1. How does React Works?</h2>
            <p><span className='ans'>Ans:</span> React কে বলা হয় Single Page Application. React এ কাজ করার জন্য কিছু Module install করতে হয়। তার মধ্যে react and react DOM পুরা ওয়েবসাইটকে reload ছাড়াই খুব তারাতারি output দেখাতে পারে। React এ মুলত সব code গুলো Javascript এ লিখা হয়। যেমন: function component and class component. এই component এর ভিতরে HTML এর মতো কিছু code থাকে সেগুলোকে HTML বলা যাবে না কিন্তু সেগুলো হচ্ছে JSX (JavaScript XML)। XML babel এর সাহায্যে JSX কে Javascript Code এ রুপান্তর করে browser এ DOM এর সাহায্যে output দেখায়।</p>
            <br />
            <hr />

            <h2>2. What is the difference between props vs state?</h2>
            <p><span className='ans'>Ans:</span> Props: Props এর মাধ্যমে একটি component থেকে অন্য যে কোন component এ data পাঠানো যায়। Props এর data শুধু read করা যায় কিন্তু edit করা যায় না। Props এর মাধ্যমে যে কোন কিছু পাঠানো সম্ভব। যেমন: array, object, number, string, function etc. 
            <br />
            State: State এর মাধ্যমে অন্য কোন component এ data পাঠানো যায় না। State এর data কে প্রয়োজন মতো edit করা সম্ভব। State এ যেকোন data রাখা যায় । </p>
        </div>
    );
};

export default QuestionAns;
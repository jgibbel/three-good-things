import React from 'react';
import './index.css';
import ThreeCard from './ThreeCard'

const Home = () => {
    return (
        <div className="home">
            <p>So,</p>
            <p>



        When James was six, he struggled with nightmares. They woke him at night, and then he woke us with his heartbreaking cries. I started experimenting with calming bedtime rituals. I tried hanging a dreamcatcher over his bed. I sang  “Michael Row Your Boat Ashore” softly and off-key. I lay quietly beside him as he tossed and turned.  Nothing worked. He’d wake in the morning, tired and anxious--already fearful of the night to come.
        
        
       </p><p> One night, having exhausted all other ideas, I said, “how about I give you three good things to think about?” He responded with silence, which I took as tacit consent.  So I named the first three things that came to mind: an upcoming trip to visit our dear friends Ann and Laura in Woodstock;  constructing buildings with his PlayMobil combo of Royal Princess Castle and Fort Eagle; making cookies with his good friend Ben.  
        
        
       </p><p> The following morning he seemed a bit more rested and relaxed. I didn’t probe--sometimes it’s best to let things be.
        
        
       </p><p> The next night, just as I was leaving his bedroom, he called out: “ Can you give me three things?”  I offered the first three things that came to mind.  He pulled up the covers, settled into his pillow, and I walked out, leaving the door ajar. Twenty minutes later when I peeked in, I saw the stillness that comes from peaceful sleep.
        
        
       </p><p> That was the beginning of the Three Good Things. 
        
        
       </p><p> Yesterday, it occurred to me that I could use three good things. And since we are all in need of a little light, I figured I would share them with the people I care about.</p>
        
       <div> 
           <ThreeCard name="Three Good Things" threeArr={['Zoom.  The platform has all kinds of nifty features like live chat, screen share, and the all-important mute button. This week I discovered that it also enables community magic.  On Wednesday, our church fundraising committee zoom meeting started out bleak: a congregant has contracted the virus; our inside track revealed that the city is even less prepared than we thought; our church’s finances are now way more precarious than they were last week. But when I looked at each person’s face, right above the pinched mouths and just behind the concerned eyes, I could see the immense gratitude of being in each other’s presence.  After acknowledging that all the work we’d done on our big event plans were in limbo, we started brainstorming creative solutions. With each new idea, another face brightened, another frown turned to a smile. One smile led to another idea.  We were hunkered down in our own private sanctuaries, but we were also at church. Anxiety had turned into action, despair had turned into faith. Turns out Zoom has way more features than a group mute button.', 'Toilet Paper. Who knew it was the bedrock of civilization?','Carbs. I know it is not a long term solution, but a defrosted Brooklyn bagel toasted and smeared with peanut butter is an excellent anti-anxiety med.  Preferably followed by a chocolate cake chaser.']}/>
        </div>
        
        
        <p> I’m going to try to give myself, and whoever else wants them, three good things once a week. 
        </p> 
        <p>
            Much love,
        </p>
        <p> Lisa

        </p>
            
        </div>
    );
}

export default Home;

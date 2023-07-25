"use client"
import Nav from '../components/nav/page';
import ProjectCard from '../components/project-card/page';
import { useState, useEffect} from 'react';
import "../style.css"


export default function Projects(){
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	return (
		<>
		
            {domLoaded && (
				<div className='slideInUp'>
					<div className='sticky top-0 slideInUp delay-300'>
                		<Nav />
            		</div>
					<h1 className="mb-0 flex justify-center text-slate-300 text-6xl mt-5 font-roboto slideInUp delay-200">My Projects</h1>
					<main className="flex max-h-screen flex items-center justify-center m-10 gap-10 slideInUp delay-100">
						<ProjectCard 
							title={"Blackjack!"} 
							gitLink={"https://github.com/lmikszta1/Blackjack-Project"} 
							liveLink={"https://lmikszta1.github.io/Blackjack-Project/"} 
							imgLink={"https://camo.githubusercontent.com/a5d41e3f1390ee70addc4ac377532b7eca1dca3d13da2cc29a7b5173fbdab4ac/68747470733a2f2f692e696d6775722e636f6d2f567846534851592e706e67"} 
							hrefLink={"/blackjack"}
							description={"Blackjack game made using vanilla JS, CSS & HTML"} />
						<ProjectCard 
							title={"Recipe Lists"} 
							gitLink={"https://github.com/lmikszta1/Project-2-Recipes"} 
							liveLink={"https://recipelists.fly.dev"} 
							imgLink={"https://camo.githubusercontent.com/0e2369be1172576c67c99bece6ef16578f800ad1884ba3554cdb739fb7aa4103/68747470733a2f2f692e696d6775722e636f6d2f797078433043702e706e67"} 
							hrefLink={"/recipes"}
							description={"Express app used to help users find recipes and save them in lists"} />
						<ProjectCard 
							title={"PillPal"} 
							gitLink={"https://github.com/lmikszta1/pillpal"} 
							liveLink={"https://pillpal.onrender.com"} 
							imgLink={"https://camo.githubusercontent.com/5beeeab3d31142f9257da83fe71205c608dec4897ee937688f2d9c36199bd4cc/68747470733a2f2f692e696d6775722e636f6d2f4670556e4747562e706e67"} 
							hrefLink={"/pillpal"}
							description={"Medication tracking app made using Django"} />
						<ProjectCard 
							title={"WeatherWiz"} 
							gitLink={"https://github.com/lmikszta1/weather-wiz"} 
							liveLink={"https://weatherwiz.onrender.com"} 
							imgLink={"https://camo.githubusercontent.com/da12094154571fbda5a63d2aacbf3cd634b3b8864b4a899778d7022ca54306d1/68747470733a2f2f692e696d6775722e636f6d2f6f4177494165772e706e67"} 
							hrefLink={"/weatherwiz"}
							description={"Weather app made using the MERN stack"} />
					</main>
				</div>
			)}
			
		</>
		
	)
}
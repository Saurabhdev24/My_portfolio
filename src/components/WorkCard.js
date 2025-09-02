import React from "react";
import { FiDownload, FiFolder, FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const WorkCard = ({ w, tabId }) => {
	return (
		<div>
			{tabId === "react-native" ? (
				<a
					href={w.app}
					download={w.title}
					target='_blank'
					rel='noreferrer'
					className='work-link-group'>
					<div className='works-card'>
						<div className='works-container'>
							<div className='top-work'>
								<FiFolder className='work-folder' />
								<div className='right'>
									{w.gitlink && (
										<a
											className='work-git'
											href={w.gitlink}
											target='_blank'
											rel='noreferrer'>
											<FiGithub />
										</a>
									)}

									<a
										href={w.app}
										download={w.title}
										target='_blank'
										rel='noreferrer'
										className='work-link'>
										<FiDownload />
									</a>
								</div>
							</div>
							<div className='mid-work'>
								<p className='work-title'>{w.title}</p>
								<p className='work-desc'>{w.desc}</p>
							</div>
							<div className='bottom-work'>
								{w.tech.map((e, index) => {
									return <small key={index}>{e}</small>;
								})}
							</div>
						</div>
					</div>
				</a>
			) : (
				<a href={w.site} target='_blank' rel='noreferrer' className='work-link-group'>
					<div className='works-card'>
						<div className='works-container'>
							<div className='top-work'>
								<FiFolder className='work-folder' />
								<div className='right'>
									{w.gitlink && (
										<a
											className='work-git'
											href={w.gitlink}
											target='_blank'
											rel='noreferrer'>
											<FiGithub />
										</a>
									)}
									<a
										className='work-link'
										href={w.site}
										target='_blank'
										rel='noreferrer'>
										<IoOpenOutline />
									</a>
								</div>
							</div>
							<div className='mid-work'>
								<p className='work-title'>{w.title}</p>
								<p className='work-desc'>{w.desc}</p>
							</div>
							<div className='bottom-work'>
								{w.tech.map((e, index) => {
									return <small key={index}>{e}</small>;
								})}
							</div>
						</div>
					</div>
				</a>
			)}
		</div>
	);
};

export default WorkCard;

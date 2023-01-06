
export default function Portfolio() {
  return (
    <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
      <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
      <div className="tokyo_tm_portfolio_titles"></div>
				{/* <!-- PORTFOLIO --> */}
				<div id="portfolio" className="tokyo_tm_section">
					<div className="container">
						<div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
							<div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
								<div className="title_flex w-full h-auto clear-both flex justify-between items-end">
									<div className="left">
										<span className="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">Portfolio</span>
										<h3 className="font-extrabold font-montserrat">Creative Portfolio</h3>
									</div>
									<div className="portfolio_filter">
										<ul className="list-none">
											<li className="mr-[25px] inline-block"><a href="#" className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" data-filter="*">All</a></li>
											<li className="mr-[25px] inline-block"><a className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="#" data-filter=".vimeo">Vimeo</a></li>
											<li className="mr-[25px] inline-block"><a className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="#" data-filter=".youtube">Youtube</a></li>
											<li className="mr-[25px] inline-block"><a className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="#" data-filter=".soundcloud">Soundcloud</a></li>
											<li className="mr-[25px] inline-block"><a className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="#" data-filter=".image">Image</a></li>
											<li className="inline-block"><a className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="#" data-filter=".detail">Detail</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="list_wrapper w-full h-auto clear-both float-left">
								<ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
									<li className="vimeo mb-[40px] float-left w-1/3 pl-[40px]">
										<div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
											<div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Teresa Butler" data-category="Vimeo">
												<a className="popup-vimeo" href="https://vimeo.com/337293658">
													<img className="opacity-0 min-w-full" src="assets/img/thumbs/1-1.jpg" alt="" />
													<div className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300" data-img-url="assets/img/portfolio/5.jpg"></div>
												</a>
											</div>
										</div>
									</li>
									<li className="youtube mb-[40px] float-left w-1/3 pl-[40px]">
										<div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
											<div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Ashley Flores" data-category="Youtube">
												<a className="popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas">
													<img className="opacity-0 min-w-full" src="assets/img/thumbs/1-1.jpg" alt="" />
													<div className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300" data-img-url="assets/img/portfolio/6.jpg"></div>
												</a>
											</div>
										</div>
									</li>
									<li className="soundcloud mb-[40px] float-left w-1/3 pl-[40px]">
										<div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
											<div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Derek Smith" data-category="Soundcloud">
												<a className="soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
													<img className="opacity-0 min-w-full" src="assets/img/thumbs/1-1.jpg" alt="" />
													<div className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300" data-img-url="assets/img/portfolio/4.jpg"></div>
												</a>
											</div>
										</div>
									</li>
									<li className="image mb-[40px] float-left w-1/3 pl-[40px]">
										<div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
											<div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Gloria Jenkins" data-category="Image">
												<a className="zoom" href="assets/img/portfolio/3.jpg">
													<img className="opacity-0 min-w-full" src="assets/img/thumbs/1-1.jpg" alt="" />
													<div className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300" data-img-url="assets/img/portfolio/3.jpg"></div>
												</a>
											</div>
										</div>
									</li>
									<li className="detail mb-[40px] float-left w-1/3 pl-[40px]">
										<div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
											<div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Selena Gomez" data-category="Detail">
												<a className="popup_info" href="#">
													<img className="opacity-0 min-w-full" src="assets/img/thumbs/1-1.jpg" alt="" />
													<div className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300" data-img-url="assets/img/portfolio/7.jpg"></div>
												</a>
											</div>
										</div>
										
										{/* <!-- Portfolio Popup Start --> */}
										<div className="details_all_wrap w-full h-auto clear-both float-left">
											<div className="popup_details">
												<div className="main_details w-full h-auto clear-both flex mb-[90px]">
													<div className="textbox w-[70%] pr-[40px]">
														<p className="mb-[20px]">We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.</p>
														<p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.</p>
													</div>
													<div className="detailbox w-[30%] pl-[40px]">
														<ul className="list-none">
															<li className="mb-[8px] w-full float-left">
																<span className="first font-bold block text-black mb-[3px]">Client</span>
																<span>Alvaro Morata</span>
															</li>
															<li className="mb-[8px] w-full float-left">
																<span className="first font-bold block text-black mb-[3px]">Category</span>
																<span><a className="text-[#767676] transition-all duration-300 hover:text-black" href="#">Detail</a></span>
															</li>
															<li className="mb-[8px] w-full float-left">
																<span className="first font-bold block text-black mb-[3px]">Date</span>
																<span>October 22, 2022</span>
															</li>
															<li className="w-full float-left">
																<span className="first font-bold block text-black mb-[3px]">Share</span>
																<ul className="share list-none relative top-[7px]">
																	<li className="mr-[10px] inline-block"><a className="text-black text-[18px]" href="#"><i className="icon-facebook-squared"></i></a></li>
																	<li className="mr-[10px] inline-block"><a className="text-black text-[18px]" href="#"><i className="icon-twitter-squared"></i></a></li>
																	<li className="mr-[10px] inline-block"><a className="text-black text-[18px]" href="#"><i className="icon-behance-squared"></i></a></li>
																	<li className="inline-block"><a className="text-black text-[18px]" href="#"><i className="icon-linkedin-squared"></i></a></li>
																</ul>
															</li>
														</ul>
													</div>
												</div>
												<div className="additional_images w-full h-auto clear-both float-left">
													<ul className="ml-[-30px] list-none">
														<li className="mb-[30px] float-left w-1/2 pl-[30px]">
															<div className="list_inner w-full h-auto clear-both float-left relative">
																<div className="my_image relative">
																	<img className="opacity-0 min-w-full" src="assets/img/thumbs/4-2.jpg" alt="" />
																	<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="assets/img/portfolio/1.jpg"></div>
																</div>
															</div>
														</li>
														<li className="mb-[30px] float-left w-1/2 pl-[30px]">
															<div className="list_inner w-full h-auto clear-both float-left relative">
																<div className="my_image relative">
																	<img className="opacity-0 min-w-full" src="assets/img/thumbs/4-2.jpg" alt="" />
																	<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="assets/img/portfolio/2.jpg"></div>
																</div>
															</div>
														</li>
														<li className="mb-[30px] float-left w-1/2 pl-[30px]">
															<div className="list_inner w-full h-auto clear-both float-left relative">
																<div className="my_image relative">
																	<img className="opacity-0 min-w-full" src="assets/img/thumbs/4-2.jpg" alt="" />
																	<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="assets/img/portfolio/3.jpg"></div>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
										{/* <!-- /Portfolio Popup End --> */}
										
									</li>
									<li className="detail mb-[40px] float-left w-1/3 pl-[40px]">
										<div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
											<div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Ave Simone" data-category="Detail">
												<a className="popup_info" href="#">
													<img className="opacity-0 min-w-full" src="assets/img/thumbs/1-1.jpg" alt="" />
													<div className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300" data-img-url="assets/img/portfolio/8.jpg"></div>
												</a>
											</div>
										</div>
										
										{/* <!-- Portfolio Popup Start --> */}
										<div className="details_all_wrap w-full h-auto clear-both float-left">
											<div className="popup_details">
												<div className="main_details w-full h-auto clear-both flex mb-[90px]">
													<div className="textbox w-[70%] pr-[40px]">
														<p className="mb-[20px]">We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.</p>
														<p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.</p>
													</div>
													<div className="detailbox w-[30%] pl-[40px]">
														<ul className="list-none">
															<li className="mb-[8px] w-full float-left">
																<span className="first font-bold block text-black mb-[3px]">Client</span>
																<span>Alvaro Morata</span>
															</li>
															<li className="mb-[8px] w-full float-left">
																<span className="first font-bold block text-black mb-[3px]">Category</span>
																<span><a className="text-[#767676] transition-all duration-300 hover:text-black" href="#">Detail</a></span>
															</li>
															<li className="mb-[8px] w-full float-left">
																<span className="first font-bold block text-black mb-[3px]">Date</span>
																<span>October 22, 2022</span>
															</li>
															<li className="w-full float-left">
																<span className="first font-bold block text-black mb-[3px]">Share</span>
																<ul className="share list-none relative top-[7px]">
																	<li className="mr-[10px] inline-block"><a className="text-black text-[18px]" href="#"><i className="icon-facebook-squared"></i></a></li>
																	<li className="mr-[10px] inline-block"><a className="text-black text-[18px]" href="#"><i className="icon-twitter-squared"></i></a></li>
																	<li className="mr-[10px] inline-block"><a className="text-black text-[18px]" href="#"><i className="icon-behance-squared"></i></a></li>
																	<li className="inline-block"><a className="text-black text-[18px]" href="#"><i className="icon-linkedin-squared"></i></a></li>
																</ul>
															</li>
														</ul>
													</div>
												</div>
												<div className="additional_images w-full h-auto clear-both float-left">
													<ul className="ml-[-30px] list-none">
														<li className="mb-[30px] float-left w-1/2 pl-[30px]">
															<div className="list_inner w-full h-auto clear-both float-left relative">
																<div className="my_image relative">
																	<img className="opacity-0 min-w-full" src="assets/img/thumbs/4-2.jpg" alt="" />
																	<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="assets/img/portfolio/1.jpg"></div>
																</div>
															</div>
														</li>
														<li className="mb-[30px] float-left w-1/2 pl-[30px]">
															<div className="list_inner w-full h-auto clear-both float-left relative">
																<div className="my_image relative">
																	<img className="opacity-0 min-w-full" src="assets/img/thumbs/4-2.jpg" alt="" />
																	<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="assets/img/portfolio/2.jpg"></div>
																</div>
															</div>
														</li>
														<li className="mb-[30px] float-left w-1/2 pl-[30px]">
															<div className="list_inner w-full h-auto clear-both float-left relative">
																<div className="my_image relative">
																	<img className="opacity-0 min-w-full" src="assets/img/thumbs/4-2.jpg" alt="" />
																	<div className="main absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="assets/img/portfolio/3.jpg"></div>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
										{/* <!-- /Portfolio Popup End --> */}
										
									</li>
								</ul>
							</div>
						</div>
					</div>	
				</div>
				{/* <!-- /PORTFOLIO --> */}
    </div>
  </div>
  )
}

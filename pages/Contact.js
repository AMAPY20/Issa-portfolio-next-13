

export default function Contact() {
  return (
    <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
      <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
      {/* <!-- CONTACT --> */}
				<div id="contact" className="tokyo_tm_section">
					<div className="container">
						<div className="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
							<div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
								<div className="title_flex w-full h-auto clear-both flex justify-between items-end">
									<div className="left">
										<span className="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">Contact</span>
										<h3 className="font-extrabold font-montserrat">Get in Touch</h3>
									</div>
								</div>
							</div>
							{/* <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
								<div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="355" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:355px;width:100%;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}</style></div></div>

								<!-- Get your API here https://www.embedgooglemap.net -->

							</div> */}
							<div className="fields w-full float-left clear-both h-auto">
								<form action="/" method="post" className="contact_form" id="contact_form" autocomplete="off">
									<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
									<div className="empty_notice"><span>Please Fill Required Fields</span></div>
									<div className="first w-full float-left">
										<ul className="list-none">
											<li className="w-full mb-[30px] float-left">
												<input id="name" type="text" placeholder="Name"/>
											</li>
											<li className="w-full mb-[30px] float-left">
												<input id="email" type="text" placeholder="Email"/>
											</li>
										</ul>
									</div>
									<div className="last">
										<textarea id="message" placeholder="Message"></textarea>
									</div>
									<div className="tokyo_tm_button" data-position="left">
										<a id="send_message" href="#">
											<span>Send Message</span>
										</a>
									</div>

									{/* <!-- If you want to change mail address to yours, please open modal.php and go to line 4 --> */}

								</form>
							</div>
						</div>
					</div>	
				</div>
				{/* <!-- /CONTACT --> */}
      </div>
    </div>
  )
}

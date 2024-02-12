import React from 'react'
import Home from '../../assets/home-outline.svg'
import Bookmarks from '../../assets/bookmarks-outline.svg'
import Add from '../../assets/add-circle-outline.svg'
import Doc from '../../assets/document-outline.svg'

const Bottombar = () => {
  return (
    <div>
      <div className="w-full">
	    <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
		    <div id="tabs" className="flex justify-between font-[Montserrat]">
			    <a href="/" className="w-full focus:text-teal-500 hover:rounded-full hover:bg-gray-200 justify-center text-center pt-2 pb-1 content-center items-center">
					<img src={Home} className="inline-flex" width={"24px"} alt="" />
				    <span className="tab tab-home block text-xs">Home</span>
			    </a>
			    <a href="/" className="w-full focus:text-teal-500 hover:rounded-full hover:bg-gray-200 justify-center text-center pt-2 pb-1">
					<img src={Bookmarks} className="inline-flex" width={"24px"} alt="" />				<span className="tab tab-kategori block text-xs">Bookmarks</span>
				</a>
				<a href="/" className="w-full focus:text-teal-500 hover:rounded-full hover:bg-gray-200 justify-center text-center pt-2 pb-1">
					<img src={Add} className="inline-flex" width={"24px"} alt="" />					<span className="tab tab-explore block text-xs">Create</span>
				</a>
				<a href="/" className="w-full focus:text-teal-500 hover:rounded-full hover:bg-gray-200 justify-center text-center pt-2 pb-1">
					<img src={Doc} className="inline-flex" width={"24px"} alt="" />					<span className="tab tab-whishlist block text-xs">Edit</span>
				</a>
			</div>
		</section>
	</div>
</div>
  )
}

export default Bottombar
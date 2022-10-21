import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const contact = useSelector((state) => state.authreducer.user);
  console.log(contact);
  return (
    <div>
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img
                src="https://i.imgur.com/wvxPV9S.png"
                height={100}
                width={100}
                alt="404"
              />
            </button>

            <span className="idd">{contact.email}</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <span>
                <i className="fa fa-copy" />
              </span>
            </div>
            <div className="text mt-3">
              <span>
                Eleanor Pena is a creator of minimalistic x bold graphics and
                digital artwork.
                <br />
                <br /> Artist/ Creative Director by Day #NFT minting@ with FND
                night.
              </span>
            </div>
            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              <span>
                <i className="fa fa-twitter" />
              </span>
              <span>
                <i className="fa fa-facebook-f" />
              </span>
              <span>
                <i className="fa fa-instagram" />
              </span>
              <span>
                <i className="fa fa-linkedin" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

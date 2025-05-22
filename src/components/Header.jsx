import {onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {auth} from "../utils/firebase";
import { useEffect } from "react";
import {addUser, removeUser} from "../utils/userSlice"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {

      navigate("/")
})
   .catch((error) => {
     navigate("/error");
});
  }
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
     if (user) {
    const {uid,email, displayName, photoURL} = user;
    dispatch(addUser({uid: uid, 
      email:email, 
      displayName:displayName, 
      photoURL:photoURL
    })
  );  
  navigate("/browse");
  
  } else {
    dispatch(removeUser());
    navigate("/");
    
  }

})
//unsubscribe when componenet unmounts
  return () =>unsubscribe();
},[]);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      
      
      <img  
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />

      {/* Right: Profile Image and Sign Out */}
      <div className="flex items-center gap-4">
        <img 
          className="w-10 h-10 rounded"
          alt="usericon"
          src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        />
        <button onClick={handleSignOut} className="text-white font-semibold hover:underline">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Vistock from '../assets/img/vistock/page_not_found/page-not-found.png';

const PageNotFound: React.FC<{
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowNavbar }) => {
  const navigate = useNavigate();
  const handleRedirect: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, []);

  return (
    <div className="h-screen bg-primaryCream flex items-center justify-center">
      <div className="flex flex-col items-center gap-14">
        <img
          src={Vistock}
          alt="Page Not Found"
          className="w-[200px] sm:w-[250px]"
        />
        <h1 className="text-heading font-magilio text-center">
          Halaman Tidak Ditemukan
        </h1>
        <button
          onClick={handleRedirect}
          className="text-body font-alegreya py-2 px-4 bg-primaryOrange rounded-full"
        >
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

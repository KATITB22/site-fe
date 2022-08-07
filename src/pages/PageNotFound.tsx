import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="h-[309px] w-[348px] bg-grey" />
        <h1 className="text-heading font-magilio">Halaman Tidak Ditemukan</h1>
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

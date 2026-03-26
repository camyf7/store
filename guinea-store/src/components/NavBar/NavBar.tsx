import MiddleNav from './MiddleNav';
import BottomNav from './BottomNav';

export default function NavBar() {
  return (
    <>
      <header className="w-full">
        {/* MiddleNav visível apenas no desktop (lg+) */}
        <div className="hidden lg:block">
          <MiddleNav />
        </div>

        {/* BottomNav sempre visível (menu principal + mobile menu) */}
        <BottomNav />
      </header>
    </>
  );
}
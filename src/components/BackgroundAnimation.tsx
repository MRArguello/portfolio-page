import './BackgroundAnimation.css';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="circle primary"></div>
      <div className="circle secondary"></div>
    </div>
  );
}

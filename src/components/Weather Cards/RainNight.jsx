import hills from '../../assets/svg/hills-day.svg';
import clouds from '../../assets/svg/cloud-grey.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[0.6em_0.6em_0_0] z-10'>
      <div className='flex justify-center items-center bg-slate-800  h-[25em]'>
        <div className='moon-container bg-yellow-100 overflow-hidden w-24 h-24 rounded-full shadow-[0_0_25px_#fff200] relative animate-[MoonRise_600ms_linear_forwards] z-10 right-[1em] top-[-9em]'>
          <div className='crater-1 bg-[#9a998445] translate-x-[1.2em] translate-y-[0.2em]  h-4 w-4 rounded-full'></div>
          <div className='crater-2 bg-[#9a998445] translate-x-[3em] translate-y-[1em] h-8 w-8 rounded-full'></div>
          <div className='crater-3 bg-[#9a998445] translate-x-[3em] translate-y-[1.7em] h-2 w-2 rounded-full'></div>
          <div className='crater-4 bg-[#9a998445] translate-x-[.2em] translate-y-[1em] h-4 w-4 rounded-full'></div>
          <div className='crater-5 bg-[#9a998445] translate-x-[2em] translate-y-[-1.2em] h-4 w-4 rounded-full'></div>
          <div className='crater-6 bg-[#9a998445] translate-x-[3.2em] translate-y-[-5.8em] h-4 w-4 rounded-full'></div>
          <div className='crater-7 bg-[#9a998445] translate-x-[.5em] translate-y-[-4.9em] h-4 w-4 rounded-full'></div>
          <div className='crater-8 bg-[#9a998445] translate-x-[4em] translate-y-[-3em] h-4 w-4 rounded-full'></div>
          <div className='crater-9 bg-[#9a998445] translate-x-[1.2em] translate-y-[-3.6em] h-7 w-7 rounded-full'></div>
          <div className='crater-10 bg-[#9a998445] translate-x-[4.7em] translate-y-[-9em] h-4 w-4 rounded-full'></div>
        </div>
        <div className='rain-containter absolute h-full w-full flex flex-col'>
          <div className='flex justify-evenly relative bottom-[-1em] left-10'>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1.1s_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_770ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_500ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_730ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1.3s_linear_infinite]'></div>
          </div>
          <div className='flex justify-around relative bottom-[0em] left-11'>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_960ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1.1s_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_830ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_970ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_780ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_920ms_linear_infinite]'></div>
          </div>
        </div>
        <div className='absolute flex z-50'>
          <img
            className='blur-lg relative right-[17em] animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur-lg relative right-[-6em] animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
        </div>
      </div>
      <div className='absolute bottom-[-8em]'>
        <img
          src={hills}
          alt='hills'
          className='relative left-16 scale-y-[2] scale-x-[1.6] brightness-75'
        />
      </div>
    </div>
  );
};

export default RainDay;

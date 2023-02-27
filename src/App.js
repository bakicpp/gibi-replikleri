import React, { useEffect, useState }  from 'react';
import './tailwind.css';
import logo from './gibi.png'


function App() {


  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 7));
  };


  
const items = [
  "Kardeşim ben senin yılgın bir hoşgörüyle beni benimsemene mi kaldım?",
  "Kimsenin hiçbir şey bilmediği yerde bir insan her şeyi bilebilir",
  "Sadece 10 liramın olması sıfır liramın olmasından daha çok canımı yakıyor. Lütfen beni bu 10 liradan kurtar!",
  "Lan yaşadığımız yetmiyor bir de senden dinliyoruz hayatın acı gerçeklerini..",
  "Gerçeklerin bir kıymeti yok ki. Genel kanı neyse onu yaşıyoruz.",
  "Ya güzel kardeşim bir şeyin tam tersini söyle al sana farklı bakış açısı.",
  "AYBEN ne lan? Sen IBAN'a 'ayben' mi diyorsun?",
  "İlkkan ne oldu sana? Birkaç gündür kangal köpeği gibisin.",
  "Senin eğitim durumun ne cimcime?",
  "Yaşarken anlamadın mı oğlum ne yaşadığını ya!",
  "Belki de bu yüzden yalnızca cesurların işidir badana.",
  "Ben yanlış geldiğimi anladım da siz çok yanlış gözüküyorsunuz. Buraya ‘Mandosi’ yazıp, kendine Esat diyip, Kadir ismiyle olmuyor.",
  "Bir tatsızlık yaşadık tatsızlık mesafesinde halledelim",
  "Benim zevklerim sizin nezdinizde makul bir zemine oturmak zorunda değil",
  "Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.",
  "Yahşi günde yar yahşidir yaman günde yetiş gardaş.",
  "Acı gerçekleri yaşadığımız yetmiyor gibi bir de senden duyuyoruz.",
  "Bak bu tek başına yeter İlkkan, Karanlık, kadim, kötücül bir güç uyanır da bize zarar verirse diye gofret aldık.",
  "İlkkan sen bu çocuğu benden bağımsız da övebilirsin biliyorsun değil mi?",
  "İlkkancığım bu Çaça Müziği bence hayatımızdaki yerini tamamladı kardeşim... Bu Çaçayla bence vedalaşalım",

];



    return(
    
     <div className=' flex justify-center place-content-center  bg-gradient-to-b from-slate-700 to-slate-900  w-screen h-screen'>
      <div className=' shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-1/2 h-5/6 bg-cyan-700   bg-gradient-to-t from-cyan-600 to-cyan-900 mt-10 rounded-2xl'>

        <div className='w-15 h-20 flex justify-center place-content-center'>
          <img className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 w-30 h-40 flex justify-center place-content-center' src={logo} alt="Logo" />
        </div>
      <h1 className='text-white font-bold text-3xl flex justify-center content-center text-center pt-32'>Bir anda kullanman gerekecek Gibi replikleri</h1>
      <br></br>
      <div className='flex justify-center place-content-center bg-slate-800'>
      <h1 className=' text-white font-semibold text-lg flex justify-center content-center text-center m-4'>"{items[num]}"</h1>
      </div>
        <br></br>
        <div className='flex justify-center place-content-center '>
        <button className='text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded w-24 h-15' onClick={handleClick}>Üret</button>
        </div>
      </div>
  
     </div>

    )
}
export default App

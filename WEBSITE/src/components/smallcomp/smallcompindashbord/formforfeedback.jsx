



export default function Formforfeedback() {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="text-center lg:text-right">
          <h1 className="text-5xl font-bold ">ڕاو سەرنج </h1>
          <p className="py-6">
            پێشنیارەکانتان دەرگایەکە بۆ بەرەپێشچونی زیاتری ئێمەو بواری ئۆتۆمبێل و زانیاری هەمەچەشنی کوردی ، ئێمە هەنگاومان ناوە و دەکرێت ئێوە هاوکاربن بە پێدانی پێشنیار و زانیاری بە ئێمە بۆ بەرەو پێشچونی زیاتری (دایاگنۆ کار)
            
            </p>
        </div> 
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ئیمێڵ</span>
              </label>
              <input type="email" placeholder="ئیمێڵ" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ناو</span>
              </label>
              <input type="text" placeholder="ناو" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ڕاو سەرنج</span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="من پێمباشە ..." required></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">ناردن</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}
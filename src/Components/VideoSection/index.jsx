import "./style.css";

export default function VideoSection(props) {
  let content = {
    English: {
      title: "Easy to Use Cloud Budget Management Software",
      description:
        "Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.",
    },
    Arabic: {
      title: "برنامج إدارة الميزانية السحابية سهل الاستخدام",
      description:
        "تم تصميم برنامجنا بحيث يمكنك الوصول إلى ميزانيتك وإدارتها والنفقات عبر الإنترنت في أي وقت من أي جهاز. يوفر مفصل تقارير الدخل والمصروفات مع الرسوم البيانية حتى تتمكن من رؤية الخاص بك بسهولة أنماط الإنفاق والميزانية في لمحة. اقرأ أدناه لمعرفة المزيد.",
    },
  };

  props.language === "Arabic"
    ? (content = content.Arabic)
    : (content = content.English);

  return (
    <div className="videoMain">
      <div className="video-content">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <a href="#">Learn More</a>
      </div>
      <div>
        <img src="/images/play.png" alt="" />
        <img src="/images/Video_bg.png" alt="" />
      </div>
    </div>
  );
}

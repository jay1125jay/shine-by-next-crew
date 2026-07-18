document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.getElementById("quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const location = document.getElementById("location").value.trim();
  const spaceType = document.getElementById("spaceType").value;
  const details = document.getElementById("details").value.trim() || "별도 문의";
  const subject = `[SHINE 견적문의] ${name} / ${location}`;
  const body = [
    "SHINE by NEXT CREW 유리창 청소 견적을 문의합니다.",
    "",
    `고객명: ${name}`,
    `작업 지역: ${location}`,
    `공간 유형: ${spaceType}`,
    `문의 내용: ${details}`,
    "",
    "유리창 사진은 이 이메일에 첨부하겠습니다."
  ].join("\n");

  document.getElementById("formStatus").textContent = "이메일 앱을 여는 중입니다. 사진을 첨부한 뒤 보내주세요.";
  window.location.href = `mailto:shine.by.nc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

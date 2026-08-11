import '../src/style.css';

export const metadata={
  title:'시원코트 — 패각 자원순환 차열 솔루션',
  description:'전남의 폐각 자원을 활용한 산업 지붕용 차열 코팅 솔루션',
};

export default function RootLayout({children}){
  return <html lang="ko"><body>{children}</body></html>;
}

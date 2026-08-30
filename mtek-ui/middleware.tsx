import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Декодируем URL, так как браузер присылает кириллицу в заэнкоженном виде (%D0%9F...)
  const decodedPath = decodeURIComponent(pathname);

  // Если пользователь зашел по адресу "/Политика_конфиденциальности"
  if (decodedPath === "/Политика_конфиденциальности") {
    // Тихо подменяем страницу на латинскую папку, сохраняя URL в браузере
    return NextResponse.rewrite(new URL("/privacy-policy", request.url));
  }

  return NextResponse.next();
}

// Настраиваем матчер, чтобы middleware срабатывал только на нужный нам роут
export const config = {
  matcher: [
    /*
     * Матчим только наш конкретный роут.
     * Из-за особенностей Next.js здесь пишем заэнкоженную строку для "/Политика_конфиденциальности"
     */
    "/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8",
  ],
};

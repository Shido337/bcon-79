/**
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типи підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro та vip
 */

// const subscriptions = ["free", "pro", "vip"];

const sub = "free";

const canAccess = sub === "pro" || sub === "vip";
// const canAccess = sub !== "free" || sub !== "standart";
// console.log("Користувач має доступ до контента?", canAccess);

/**
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isFriend = true;
const isOnline = true;
const isDenied = false;

const canOpenChat = isFriend && isOnline && !isDenied;
// console.log("Можна відкрити чат? ", canOpenChat);

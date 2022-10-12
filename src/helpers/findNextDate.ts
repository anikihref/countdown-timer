import { DATES } from "../static/dates";

export function findNextDate(dateName: string): Date {
  const currentYear = new Date().getFullYear()

  function findDateYear(date: Date): Date {
    if (date.getTime() - Date.now() < 0) {
      date.setFullYear(date.getFullYear() + 1);
    }

    return date;
  }

  switch (dateName) {
    case DATES.NEW_YEAR: {
        return new Date(currentYear + 1, 0, 0)
    }

    case DATES.CHRISTMAS: {
        return findDateYear(new Date(currentYear, 11, 25))
    }

    case DATES.FALL: {
        return findDateYear(new Date(currentYear, 8, 0))
    }

    case DATES.WINTER: {
        return findDateYear(new Date(currentYear, 11, 0))
    }

    case DATES.SPRING: {
        return findDateYear(new Date(currentYear, 2, 0))
    }

    case DATES.SUMMER: {
        return findDateYear(new Date(currentYear, 5, 0))
    }

    default: return new Date()
  }
}

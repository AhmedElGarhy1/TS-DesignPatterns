export class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public query(sql: string): void {
    console.log(`Executing ${sql}`);
  }

  public connect(): void {
    console.log("Connecting to database...");
  }
}

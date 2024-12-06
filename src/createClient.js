import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://klgtkelxlzblnlaqslmw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZ3RrZWx4bHpibG5sYXFzbG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMTk0NzYsImV4cCI6MjA0ODg5NTQ3Nn0._J0oIfWNtYcRrwCBcwrRP6LdfeYykClpJC5Rqw98hE0"
);

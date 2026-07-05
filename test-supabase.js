import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://abtvrclqqqzosxcgtmup.supabase.co"\;
const supabaseKey = "sb_publishable_QAcpOOV3_zbjhFih8IoHwQ_e2LcAua1";

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  const { data, error } = await supabase.storage.from('cabin-images').upload('test-123.txt', 'http://example.com/image.png');
  console.log("Upload error:", error);
}

test();

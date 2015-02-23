<?php 

 function encode($val, $base=62, $chars='pKfjwTGtY48RAZbiaxSL0XgQM92lEmD3CUI1zPWkeNuqVhFoBcvy7J56rHdnsO') {
      // can't handle numbers larger than 2^31-1 = 2147483647
      $str = '';
      do {
          $i = $val % $base;
          $str = $chars[$i] . $str;
          $val = ($val - $i) / $base;
      } while($val > 0);
     return $str;
 }
 
 function decode($str, $base=62, $chars='pKfjwTGtY48RAZbiaxSL0XgQM92lEmD3CUI1zPWkeNuqVhFoBcvy7J56rHdnsO') {
     $len = strlen($str);
     $val = 0;
     $arr = array_flip(str_split($chars));
     for($i = 0; $i < $len; ++$i) {
        $val += $arr[$str[$i]] * pow($base, $len-$i-1);
    }
     return $val;
 }

 ?>
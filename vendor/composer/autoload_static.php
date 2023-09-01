<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbcc4c068ef7df1c1951e9840d6947728
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbcc4c068ef7df1c1951e9840d6947728::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbcc4c068ef7df1c1951e9840d6947728::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

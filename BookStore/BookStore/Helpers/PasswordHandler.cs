

using System.Security.Cryptography;

namespace BookStore.Helpers
{
    public class PasswordHandler
    {
        private const int SaltSize = 16;
        private const int KeySize = 32;
        private const int Iterations = 1000;
        private static readonly HashAlgorithmName hashAlgorithmName = HashAlgorithmName.SHA256;
        private const char Delimiter = ';';

        public static string Hash (string password)
        {
            Byte[] salt = RandomNumberGenerator.GetBytes(SaltSize);
            Byte[] hash = Rfc2898DeriveBytes.Pbkdf2(password, salt, Iterations, hashAlgorithmName, KeySize);

            return string.Join (Delimiter, Convert.ToBase64String(salt), Convert.ToBase64String(hash));
        }

        public static bool IsVerified (string hashedPassword, string userPassword)
        {
            String[] hashedElement = hashedPassword.Split(Delimiter);
            byte[] salt = Convert.FromBase64String(hashedElement[0]);
            byte[] hash = Convert.FromBase64String(hashedElement[1]);

            byte[] hashedUserPassword = Rfc2898DeriveBytes.Pbkdf2(userPassword, salt, Iterations, hashAlgorithmName, KeySize);

            return CryptographicOperations.FixedTimeEquals(hash, hashedUserPassword);
        } 
    }
}

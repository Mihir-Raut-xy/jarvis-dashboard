"use client";

export default function MechanicalReactor() {
  const blades = Array.from({ length: 12 });

  return (
    <div className="absolute flex items-center justify-center">

      {/* ===========================
           OUTER TITANIUM HOUSING
      ============================ */}

      <div
        className="
          absolute
          w-[300px]
          h-[300px]
          rounded-full

          bg-gradient-to-br
          from-zinc-500
          via-zinc-900
          to-black

          border
          border-cyan-500/15

          shadow-[0_0_80px_rgba(0,255,255,0.08)]

          flex
          items-center
          justify-center
        "
      >

        {/* Inner Housing */}

        <div
          className="
            w-[245px]
            h-[245px]
            rounded-full

            bg-gradient-to-br
            from-zinc-900
            via-black
            to-zinc-800

            border
            border-zinc-700

            shadow-inner
          "
        />
      </div>

      {/* ===========================
            MECHANICAL BLADES
      ============================ */}

      {blades.map((_, i) => {

        const angle = i * 30;

        return (

          <div
            key={i}
            className="absolute"
            style={{
              transform: `rotate(${angle}deg) translateY(-104px)`
            }}
          >

            <div
              className="
                w-[20px]
                h-[74px]

                rounded-full

                bg-gradient-to-b
                from-zinc-300
                via-zinc-700
                to-zinc-950

                border
                border-zinc-400/40

                shadow-lg
              "
            />

          </div>

        );

      })}

      {/* ===========================
           HEX CHAMBER
      ============================ */}

      <div
        className="
          absolute
          w-[130px]
          h-[130px]

          rotate-45

          rounded-2xl

          border-2
          border-cyan-400/30

          bg-black/40

          backdrop-blur-md

          shadow-[0_0_40px_rgba(0,255,255,0.15)]
        "
      />

      <div
        className="
          absolute
          w-[88px]
          h-[88px]

          rotate-45

          rounded-xl

          bg-cyan-400/10

          border
          border-cyan-300/40
        "
      />

      {/* ===========================
            ENERGY CRYSTAL
      ============================ */}

      <div
        className="
          absolute

          w-[40px]
          h-[40px]

          rotate-45

          rounded-md

          bg-cyan-300

          shadow-[0_0_45px_rgba(0,255,255,1)]

          animate-pulse
        "
      />

    </div>
  );
}
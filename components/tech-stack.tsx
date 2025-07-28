import { motion } from "framer-motion";

import { TechStack } from "@/lib/data/loader.ts";
import { kebabToCamelCase } from "@/lib/utils";
import { AnimatedTitle } from "@/components/custom-ui/animated-title";
import { Icon, IconName } from "@/components/icons";

export function TechStackSection({ data }: { data: TechStack }) {
  const techIcons = data.technologies.map((item) =>
    kebabToCamelCase(item.title)
  );
  const getTitle = (title: string) => {
    if (title === "MaterialUI") return "Material UI";
    else return title;
  };

  return (
    <section className="flex flex-col items-center gap-12 w-11/12 sm:w-4/5 max-w-7xl">
      <AnimatedTitle>{getTitle(data.title)}</AnimatedTitle>
      <div className="flex items-end justify-center gap-5 sm:gap-11 flex-wrap w-11/12 md:w-3/5">
        {data.technologies.map((tech, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: 10, y: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index / 4 }}
              key={tech.title + index + data.language}
            >
              {tech.address ? (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  href={tech.address}
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Icon
                    name={techIcons[index] as IconName}
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                  <span className="text-sm sm:text-base">{tech.title}</span>
                </motion.a>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    name={techIcons[index] as IconName}
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                  <span className="text-sm sm:text-base">{tech.title}</span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
